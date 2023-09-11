import JobModel from "../models/Job.js";

class JobsController {
    static addNewJob = async (req, res) => {
        try {
            const { title, job_search_id, company_name, description, requirements } = req.body;

            const job = new JobModel({
                title: title,
                job_search_id: job_search_id,
                company_name: company_name,
                description: description,
                requirements: requirements
            });

            await job.save();

            res.send({
                "status": "success",
                "message": "Job added successfully"
            });
        } catch (error) {
            console.error(error);
            res.send({
                "status": "failed",
                "message": "Error adding job"
            });
        }
    }

    static updateJob = async (req, res) => {
        try {
            const { jobId } = req.params;
            const { title, description, requirements, applylink} = req.body;

            const updatedJob = await JobModel.findByIdAndUpdate(
                jobId,
                {
                    $set: {
                        title: title,
                        description: description,
                        requirements: requirements,
                        updatedAt: Date.now(),
                        applylink:applylink
                    }
                },
                { new: true }
            );

            if (!updatedJob) {
                return res.send({
                    "status": "failed",
                    "message": "Job not found"
                });
            }

            res.send({
                "status": "success",
                "message": "Job updated successfully"
            });
        } catch (error) {
            console.error(error);
            res.send({
                "status": "failed",
                "message": "Error updating job"
            });
        }
    }

    static deleteJob = async (req, res) => {
        try {
            const { jobId } = req.params;

            const deletedJob = await JobModel.findByIdAndDelete(jobId);

            if (!deletedJob) {
                return res.send({
                    "status": "failed",
                    "message": "Job not found"
                });
            }

            res.send({
                "status": "success",
                "message": "Job deleted successfully"
            });
        } catch (error) {
            console.error(error);
            res.send({
                "status": "failed",
                "message": "Error deleting job"
            });
        }
    }

    static getAllJobs = async (req, res) => {
        try {
            const jobs = await JobModel.find();
            res.send({
                "status": "success",
                "jobs": jobs
            });
        } catch (error) {
            console.error(error);
            res.send({
                "status": "failed",
                "message": "Error fetching jobs"
            });
        }
    }

    static getOneJob = async (req, res) => {
        try {
            const jobId = req.params.jobId; // Get the job id from the request parameter
            const job = await JobModel.findById(jobId);

            if (!job) {
                return res.send({
                    status: "failed",
                    message: "Job not found"
                });
            }

            res.send({
                status: "success",
                job: job
            });
        } catch (error) {
            console.error(error);
            res.send({
                status: "failed",
                message: "Error fetching job"
            });
        }
    }
}

export default JobsController;
