require('dotenv').config()
const fs = require("fs")
const page = fs.readFileSync("./view/view.html","utf-8",(err,data)=>{
    console.log({err,data})
})
const express = require("express")


const app = express();
const routes = express.Router();
app.use("/api/v1/user",routes)
routes.get("/page",(req,res)=>{

    res.send(page)
})


// My variable name is "PORT into the .env file"

app.listen(process.env.PORT,()=>{
    console.log(`serve started ... Listening at PORT: ${process.env.PORT}`);
})