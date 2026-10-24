import pool from "./pool.js";

const getAllMessages=async (username)=>{
    let SQL=`
     SELECT * FROM messages
    `
    const queries=[]
    if(username){
        SQL+=`
        WHERE username ILIKE $1
        `;
        queries.push(`%${username}%`)
    }
    try{
        const {rows}=await pool.query(SQL,queries);
        return rows;
    }catch(error){
    console.error(error);
        throw new Error('problem occured connecting to database')
    }
}

const insertMessage=async (message)=>{
   const {username,text}=message;
   const  id=crypto.randomUUID();
   const added=new Date();
   const SQL = `
    INSERT INTO messages (id, username, text, added) VALUES 
    ($1,$2,$3,$4);
   `;
   try{
    await pool.query(SQL,[id,username,text,added])
   }catch(error){
    console.error(error);
    throw new Error("problem occured connecting to database");
   }
}

const deleteMessage=async (mesageId)=>{
  const SQL=`
   DELETE FROM MESSAGES
   WHERE id=$1
  `;

  try{
    await pool.query(SQL,[mesageId])
  }catch(error){
     console.error(error);
     throw new Error("problem occured connecting to database");
  }
}

export default {
    getAllMessages,
    insertMessage,
    deleteMessage
}