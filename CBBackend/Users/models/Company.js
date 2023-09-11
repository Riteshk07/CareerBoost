import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    industry: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const CompanyModel = mongoose.model("companies", companySchema);

export default CompanyModel;
