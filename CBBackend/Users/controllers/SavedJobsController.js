import SavedJobModel from '../models/SavedJob.js';

class SavedJobsController {
    static saveJob = async (req, res) => {
        try {
            const { userid, title, job_search_id, company_name, description, requirements } = req.body;

            const savedJob = new SavedJobModel({
                userid,
                title,
                job_search_id,
                company_name,
                description,
                requirements
            });

            await savedJob.save();

            res.status(201).json({ status: 'success', message: 'Job saved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: 'error', message: 'Error saving job' });
        }
    }

    static getSavedJobs = async (req, res) => {
        try {
            const userid = req.params.userid; // Assuming you pass userid as a parameter

            const savedJobs = await SavedJobModel.find({ userid }).sort({ createdAt: -1 });

            res.status(200).json({ status: 'success', savedJobs });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: 'error', message: 'Error fetching saved jobs' });
        }
    }

    static removeJob = async (req, res) => {
        try {
            const savedJobId = req.params.id; // Assuming you pass savedJobId as a parameter

            await SavedJobModel.findByIdAndDelete(savedJobId);

            res.status(200).json({ status: 'success', message: 'Job removed from saved jobs' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: 'error', message: 'Error removing job from saved jobs' });
        }
    }
}

export default SavedJobsController;
