
const getNewMessagePage=async (req,res)=>{
    res.render('new-message',{title:'New Message'})
}

export default getNewMessagePage