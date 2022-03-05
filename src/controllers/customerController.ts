import { Request, Response } from "express";
import { Address } from "../models/Address";
import { Contact } from "../models/Contact";
import { Customer } from "../models/Customer";

export const ping = async (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const listCustomers = async (req: Request, res: Response) => {
  const customers = await Customer.findAll({
    include: [
      { model: Address, as: "Addresses", through: { attributes: [] } },
      { model: Contact, as: "Contacts", through: { attributes: [] } },
    ],
  });
  res.json(customers);
};

export const addCustomer = async (req: Request, res: Response) => {
  const { name, cpf, gender, birthdate } = req.body;
  await Customer.create({ name, cpf, gender, birthdate }).then((result) =>
    res.json(result)
  );
};

export const editCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customerToEdit = req.body;
  const customerDataBase = await Customer.findByPk(id);
  if (customerDataBase) {
    Object.keys(customerToEdit).forEach((key) => {
      if (key !== undefined) {
        customerDataBase[key] = customerToEdit[key];
      }
    });
    customerDataBase.save();
  }
  res.json(customerDataBase);
};

export const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Customer.destroy({ where: { id } }).then((result) => {
    if (result === 1) {
      res.send("Cliente excluído com sucesso!");
    } else {
      res.send("Erro ao excluir o cliente!");
    }
  });
};
