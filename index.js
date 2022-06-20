import "./utils/db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import transactionRoutes from "./routes.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionRoutes);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}......`);
})