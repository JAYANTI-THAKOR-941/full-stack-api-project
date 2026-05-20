import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from './config/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000

// database connection
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// import routes
import userRoutes from './routes/userRoutes.js';

app.use('/api/user',userRoutes);

app.get('/',(req,res)=>{
    res.send("Server is working.!!");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
