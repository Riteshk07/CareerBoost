import SkillsModel from "../models/Skills.js";

class SkillsController {
    static addSkills = async (req, res) => {
        try {
            const { skills } = req.body;
            if (!skills || !Array.isArray(skills)) {
                return res.send({
                    "status": "failed",
                    "message": "Skills should be an array"
                });
            }

            const userID = req.user._id; // Get the logged-in user's ID

            const skillsDoc = new SkillsModel({
                userID: userID,
                skills: skills
            });

            await skillsDoc.save();

            res.send({
                "status": "success",
                "message": "Skills added successfully"
            });
        } catch (error) {
            console.log(error);
            res.send({
                "status": "failed",
                "message": "Error adding skills"
            });
        }
    }
    static updateSkills = async (req, res) => {
        try {
            const { skills } = req.body;
            if (!skills || !Array.isArray(skills)) {
                return res.send({
                    "status": "failed",
                    "message": "Skills should be an array"
                });
            }

            const userID = req.user._id; // Get the logged-in user's ID

            // Find the existing skills document for the user
            let skillsDoc = await SkillsModel.findOne({ userID: userID });

            if (!skillsDoc) {
                // Create a new skills document if none exists
                skillsDoc = new SkillsModel({
                    userID: userID,
                    skills: skills
                });
            } else {
                // Update the existing skills document
                skillsDoc.skills = skills;
            }

            await skillsDoc.save();

            res.send({
                "status": "success",
                "message": "Skills updated successfully"
            });
        } catch (error) {
            console.log(error);
            res.send({
                "status": "failed",
                "message": "Error updating skills"
            });
        }
    }

}

export default SkillsController;
