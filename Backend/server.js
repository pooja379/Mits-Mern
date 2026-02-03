const express = require("express")
const todoRoute=require("./router/todoRouter")
const dotenv=require("dotenv");
const userRoute = require("./router/userRouter");
dotenv.config();
const app=express();
app.use(express.json())
app.use("/api/todo",todoRoute);
app.use("/api/users",userRoute)
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>
{
    console.log(`Server running on port http:///localhost:${PORT}`)
})









// app.get("/",(req,res)=>
// {
//     res.send("Get Route is working")
// })
// app.post("/",(req,res)=>
// {
// res.json({
//     message:"Post Route is working"

// })
// })
// app.put("/",(req,res)=>{
//     res.status(200).json({
//         message:"Put route is working"
// })
// })
// app.delete("/",(req,res)=>
// {
//     res.status(200).json({
//         message:"delete route is working"
//     })
// })