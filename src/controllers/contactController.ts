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

export const editContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  const contactToEdit = req.body;
  const contactDataBase = await Contact.findByPk(id);
  if (contactDataBase) {
    Object.keys(contactToEdit).forEach((key) => {
      if (key !== undefined) {
        contactDataBase[key] = contactToEdit[key];
      }
    });
    contactDataBase.save();
  }
  res.json(contactDataBase);
};

export const deleteContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Contact.destroy({ where: { id } }).then((result) => {
    if (result === 1) {
      res.send("Contato excluído com sucesso!");
    } else {
      res.send("Erro ao excluir o contato!");
    }
  });
};
