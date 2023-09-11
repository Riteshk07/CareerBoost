import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    job_search_id:{type:String, required:true, trim:true},
    company_name: {type:String, required:true, trim:true},
    description: { type: String, required: true, trim: true },
    requirements: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    applylink:{type:String, required:true, trim:true}
});

const JobModel = mongoose.model("jobs", jobSchema);

export default JobModel;
