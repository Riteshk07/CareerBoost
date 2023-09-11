import mongoose from "mongoose";

// Defining Schema
const skillSchema = new mongoose.Schema({
    userID:{type:String, required:true, trim:true},
    skills:{type:Array, required:true}
});

// model
const SkillsModel = mongoose.model("skills", skillSchema);

export default SkillsModel;