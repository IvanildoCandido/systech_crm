import { Router } from "express";
import * as customerController from "../controllers/customerController";
import * as userController from "../controllers/userController";
import { Auth } from "../middlewares/auth";

const router = Router();

router.get("/ping", customerController.ping);

router.post("/users/login", userController.login);
router.post("/users/register", userController.register);

router.get("/customers", Auth.private, customerController.listStudents);
router.post("/customers", customerController.addStudent);
router.put("/customers/:id", customerController.editStudent);
router.delete("/customers/:id", customerController.deleteStudent);

export default router;
