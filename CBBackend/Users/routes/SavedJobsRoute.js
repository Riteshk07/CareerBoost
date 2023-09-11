import express from 'express';
import SavedJobsController from '../controllers/SavedJobsController.js';
import checkUserAuth from '../middlewares/auth-middleware.js'; // Import the checkUserAuth middleware

const router = express.Router();

// Apply the checkUserAuth middleware to protect these routes
router.post('/save', checkUserAuth, SavedJobsController.saveJob);
router.get('/saved/:userid', checkUserAuth, SavedJobsController.getSavedJobs);
router.delete('/remove/:id', checkUserAuth, SavedJobsController.removeJob);

export default router;
