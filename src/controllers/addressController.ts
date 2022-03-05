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

export const editAddress = async (req: Request, res: Response) => {};

export const deleteAddress = async (req: Request, res: Response) => {};
