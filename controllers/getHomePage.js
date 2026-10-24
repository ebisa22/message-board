import db from "../db/queries.js";

const getHomePage=async (req,res)=>{
    const username=req.query.search;
    const messages = await db.getAllMessages(username);
    res.render('index',{messages,title:'Home',search:username})
}

export default getHomePage