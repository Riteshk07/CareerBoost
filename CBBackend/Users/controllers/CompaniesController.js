import CompanyModel from "../models/Company.js";

class CompaniesController {
    static addNewCompany = async (req, res) => {
        try {
            const { name, description, industry } = req.body;

            const company = new CompanyModel({
                name: name,
                description: description,
                industry: industry
            });

            await company.save();

            res.send({
                "status": "success",
                "message": "Company added successfully"
            });
        } catch (error) {
            console.error(error);
            res.send({
                "status": "failed",
                "message": "Error adding company"
            });
        }
    }

    static getAllCompanies = async (req, res) => {
        try {
            const companies = await CompanyModel.find();
            res.send({
                "status": "success",
                "companies": companies
            });
        } catch (error) {
            console.error(error);
            res.send({
                "status": "failed",
                "message": "Error fetching companies"
            });
        }
    }
}

export default CompaniesController;
