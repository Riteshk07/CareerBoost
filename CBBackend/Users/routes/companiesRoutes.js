import express from "express";
import checkUserAuth from "../middlewares/auth-middleware.js";
import CompaniesController from "../controllers/CompaniesController.js";

const router = express.Router();

// Protected routes
router.post("/add", checkUserAuth, CompaniesController.addNewCompany);
router.get("/getAll", checkUserAuth, CompaniesController.getAllCompanies);

export default router;
