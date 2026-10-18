import db from '../db.js'

const createMessage=async(req,res)=>{
    const message=req.body
    db.createMessage(message)
    res.render("new-message", { title: "New Message" });

}

export default createMessage