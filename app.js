import express from 'express'
import path from 'node:path'
import homeRouter from './routes/home-page.js'
import newMessageRouter from './routes/new-message.js'
import errorRouter from './routes/errors/404.js'
import deleteRouter from './routes/deleteMessage.js'

const __dirname=import.meta.dirname
const app=express()
const PORT= process.env.PORT || 3000

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: true }));
app.set('views',path.join(__dirname,'./views'))
app.set('view engine','ejs')

app.use('/',homeRouter)
app.use('/new-message',newMessageRouter)
app.use('/delete',deleteRouter)
app.use(errorRouter)


app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}...`);
})






