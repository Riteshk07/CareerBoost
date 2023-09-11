import express from "express";
import checkUserAuth from "../middlewares/auth-middleware.js";
import JobsController from "../controllers/JobsController.js";

const router = express.Router();

// Protected routes
router.post("/addjob", checkUserAuth, JobsController.addNewJob);
router.put("/updatejob/:jobId", checkUserAuth, JobsController.updateJob);
router.delete("/deletejob/:jobId", checkUserAuth, JobsController.deleteJob);
router.get("/getAllJob", checkUserAuth, JobsController.getAllJobs);
router.get("/getOneJob/:jobId", JobsController.getOneJob);

export default router;
