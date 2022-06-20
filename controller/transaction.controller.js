import Transaction from '../model/transaction.model.js';

export const addTransaction =  async(req,res)=>{
    const transaction = new Transaction({ 
        data: req.body.data
    });
    try{
        await transaction.save();
        return res.send("Data saved successfully").status(201);
    }catch(err){
        return res.send("Something went wrong").status(500);
    }
}

export const getTransactions = async(req,res)=>{
    const transactions = await Transaction.find();
    return res.send({ data: transactions }).status(200);
}
