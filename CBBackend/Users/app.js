import dotenv from "dotenv";
dotenv.config()
import  express  from "express";
import cors from "cors";
import connectDb from "./config/connectdb.js";
import userRoutes from "./routes/userRoutes.js";
import skillsRoutes from "./routes/skillsRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";
import companiesRoutes from "./routes/companiesRoutes.js";
import savedJobsRoutes from "./routes/SavedJobsRoute.js";


const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// CORS policy
app.use(cors());

// Database Connection
connectDb(DATABASE_URL);

// JSON
 app.use(express.json());

 

// Load Routes 
app.use("/api/user", userRoutes);
app.use("/api/app", skillsRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/companies", companiesRoutes);
app.use('/api/savedjobs', savedJobsRoutes);

app.listen(port, ()=>{
    console.log(`Server is Listening at http://localhost:${port}`);
})