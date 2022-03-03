import { Request, Response } from "express";
import { Address } from "../models/Address";
import { Customer } from "../models/Customer";

export const ping = async (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const listCustomers = async (req: Request, res: Response) => {
  const customers = await Customer.findAll({
    include: [{ model: Address, as: "Addresses", through: { attributes: [] } }],
  });
  res.json(customers);
};

export const addCustomer = async (req: Request, res: Response) => {
  const { studentName, className } = req.body;
  await Customer.create({ studentName, className }).then((result) =>
    res.json(result)
  );
};

export const editStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { studentName, className } = req.body;
  const studentObject = await Customer.findByPk(id);
  // if (studentObject) {
  //   if (studentName !== undefined) {
  //     studentObject.studentName = studentName;
  //   }
  //   if (className !== undefined) {
  //     studentObject.className = className;
  //   }
  //   studentObject.save();
  // }
  // res.json(studentObject);
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Customer.destroy({ where: { id } }).then((result) => {
    if (result === 1) {
      res.send("Usuário excluído com sucesso!");
    } else {
      res.send("Erro ao excluir usuário!");
    }
  });
};
