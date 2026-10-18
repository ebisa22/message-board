import db from "../db.js";

const getHomePage=async (req,res)=>{
    res.render('index',{messages:db.messages,title:'Home'})
}

export default getHomePage