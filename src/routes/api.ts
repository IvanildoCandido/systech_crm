import { Router } from "express";
import * as customerController from "../controllers/customerController";
import * as addressController from "../controllers/addressController";
import * as contactController from "../controllers/contactController";
import * as userController from "../controllers/userController";
import { Auth } from "../middlewares/auth";

const router = Router();

router.get("/ping", customerController.ping);

router.post("/users/login", userController.login);
router.post("/users/register", userController.register);

// Routes from Customers
router.get("/customers", Auth.private, customerController.listCustomers);
router.post("/customers", customerController.addCustomer);
router.put("/customers/:id", customerController.editCustomer);
router.delete("/customers/:id", customerController.deleteCustomer);

// Routes from Addresses
router.get("/addresses", addressController.listAddress);
router.post("/addresses", addressController.addAddress);
router.put("/addresses/:id", addressController.editAddress);
router.delete("/addresses/:id", addressController.deleteAddress);

// Routes from Contacts
router.get("/contacts", contactController.listContact);
router.post("/contacts", contactController.addContact);
router.put("/contacts/:id", contactController.editContact);
router.delete("/contacts/:id", contactController.deleteContact);

export default router;
