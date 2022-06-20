import { addTransaction, getTransactions } from "./controller/transaction.controller.js";
import express  from "express";

const router = express.Router();

router.post("/new", addTransaction);

router.get("/all", getTransactions);

export default router;