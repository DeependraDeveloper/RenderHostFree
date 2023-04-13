const express = require('express');
const app = express();

app.use(express.json());

let users = [
    {
        id:1,
        name:"Deependra"
    },
    {
        id:2,
        name:"Ravi"
    },
    {
        id:3,
        name:"Riyazat"
    },
    {
        id:4,
        name:"Rahim",
    },
    {
        id:5,
        name:"Rahul"
    },
    {
        id:6,
        name:"Vishaka"
    },
    {
        id:7,
        name:"Prachi"
    },
    {
        id:8,
        name:"Roshan"
    }
]

app.get("/",(req,res)=>{
    return res.status(200).json({message:"serving delployed successfully on deta Sapce"});
})

app.get("/users",(req,res)=>{
    return res.status(200).json(users);
})

app.get("/users/:id",(req,res)=>{
    const {id}=req.params;

    let result = users.filter((user)=>{
        return user.id == id;
    })

    if(!result || result.length == 0) return res.status(400).json({msg:"invalid user id"})

    return res.status(200).json(result)
})

app.listen(6000,()=>console.log("server started on port 6000"))

module.exports =app;

