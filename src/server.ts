import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import apiRoutes from "./routes/api";
import cors from "cors";
import passport from "passport";

dotenv.config();
const PORT = process.env.PORT;

const server = express();

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(passport.initialize());

server.use("/api", apiRoutes);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado." });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
