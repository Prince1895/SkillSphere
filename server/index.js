import  express  from "express";
import dotenv from 'dotenv';

import connectDB from "./config/db.js";  
import cors from 'cors';  
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import mongoose from 'mongoose';
import router from "./routes/paymentRoutes.js";



dotenv.config();
mongoose.set("debug", true);
connectDB(); 
const app=express();
(async () => {
  

  app.use(cors());
  app.use(express.json());

  app.get('/', (_req, res) => {
    res.send('API is working');
  });
  app.use("/api/auth",authRoutes);
  app.use("/api/course",courseRoutes);
  app.use("/api/lesson",lessonRoutes);
  app.use("/api/quiz",quizRoutes);
  app.use("/api/user",userRoutes);
  app.use("/api/enrollment",enrollmentRoutes);
  app.use("/api/enroll", router);

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();

export default app;