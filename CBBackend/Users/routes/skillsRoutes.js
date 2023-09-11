import express from "express";
import SkillsController from "../controllers/SkillsController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

const router = express.Router();

// Protected route, user must be authenticated to add skills
router.post("/addskills", checkUserAuth, SkillsController.addSkills);
router.post("/updateskills", checkUserAuth, SkillsController.updateSkills);

export default router;
