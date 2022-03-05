import { Request, Response } from "express";
import { Address } from "../models/Address";

export const listAddress = async (req: Request, res: Response) => {
  let addresses = await Address.findAll();
  res.json(addresses);
};

export const addAddress = async (req: Request, res: Response) => {
  const { cep, street, number, complement, district, city, state, notes } =
    req.body;
  await Address.create({
    cep,
    street,
    number,
    complement,
    district,
    city,
    state,
    notes,
  }).then((result) => res.json(result));
};

export const editAddress = async (req: Request, res: Response) => {
  const { id } = req.params;
  const addressToEdit = req.body;
  const addressDataBase = await Address.findByPk(id);
  if (addressDataBase) {
    Object.keys(addressToEdit).forEach((key) => {
      if (key !== undefined) {
        addressDataBase[key] = addressToEdit[key];
      }
    });
    addressDataBase.save();
  }
  res.json(addressDataBase);
};

export const deleteAddress = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Address.destroy({ where: { id } }).then((result) => {
    if (result === 1) {
      res.send("Endereço excluído com sucesso!");
    } else {
      res.send("Erro ao excluir o endereço!");
    }
  });
};
