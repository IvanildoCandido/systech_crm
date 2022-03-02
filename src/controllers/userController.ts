import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";

import { JWTGeneration } from "../middlewares/auth";
import { use } from "passport";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: { email },
  });
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = JWTGeneration({ id: user.id, email: user.email }, "2h");
        res.json({ status: true, token });
      }
    });
  } else {
    res.send("Email e/ou senha incorretos!");
  }
};

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email && password) {
    let hasUser = await User.findOne({ where: { email } });
    if (!hasUser) {
      const hashPassword = await bcrypt.hash(password, 10);
      let newUser = await User.create({ email, password: hashPassword });
      const token = JWTGeneration(
        { id: newUser.id, email: newUser.email },
        "2h"
      );
      res.status(201).json({ id: newUser.id, token });
    } else {
      res.json({ error: "Email já existente!" });
    }
  } else {
    res.json({ error: "Email ou senha não enviados!" });
  }
};
