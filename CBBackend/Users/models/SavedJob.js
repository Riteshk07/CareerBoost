import mongoose from 'mongoose';

const savedJobSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    job_search_id: { type: String, required: true },
    company_name: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const SavedJobModel = mongoose.model('saved_jobs', savedJobSchema);

export default SavedJobModel;
