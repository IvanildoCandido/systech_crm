import { Request, Response } from "express";
import { Contact } from "../models/Contact";

export const listContact = async (req: Request, res: Response) => {
  let contacts = await Contact.findAll();
  res.json(contacts);
};

export const addContact = async (req: Request, res: Response) => {
  const { type, description } = req.body;
  await Contact.create({ type, description }).then((result) =>
    res.json(result)
  );
};

export const editContact = async (req: Request, res: Response) => {};

export const deleteContact = async (req: Request, res: Response) => {};
