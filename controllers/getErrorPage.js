
class PageNotFound extends Error{
    constructor(message='Page not found'){
        super(message)
        this.name='PageNotFound'
    }
}
const getErrorPage=async (req,res,next)=>{
    console.error(new PageNotFound())
    res.status(404).render('404')
}

export default getErrorPage
