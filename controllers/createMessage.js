import db from '../db/queries.js';

const createMessage=async(req,res)=>{
    const message=req.body
    await db.insertMessage(message);
    res.render("new-message", { title: "New Message" });
}

export default createMessage
