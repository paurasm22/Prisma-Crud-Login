import express, { urlencoded } from "express";
import userroutes from "./Routes/userroutes.js"
const app =  express()

const PORT = 2000;
app.use(express.json())
app.use(urlencoded({extended:false}))
app.get('/',(req,res)=>{
  res.send("Hello")
})

app.use('/api/user',userroutes)





app.listen(PORT,()=>{
  console.log(`Listening on port :${PORT}`)
})