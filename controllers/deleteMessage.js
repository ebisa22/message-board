import db from '../db.js'

const deleteMessage=async(req,res)=>{
      const messageId=req.params.messageId
      db.deleteMessage(messageId)
      res.redirect('/')
}

export default deleteMessage