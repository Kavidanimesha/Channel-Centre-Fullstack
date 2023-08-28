const express = require ('express')
const mysql = require ('mysql')

const app = express() 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#Kavi756#",
    database: "pharmacy"
})

app.get("/" , (req,res) => {
    res.json("Hello")
})

app.get("/prescriptions" , (req,res) => {
    const q = "SELECT FROM prescriptions"
    db.query(q, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/prescriptions/:id" , (req,res) => {

})

app.post("/prescriptions" , (req,res) => {

})

app.delete("/prescriptions/:id" , (req,res) => {

}) 

app.put("/prescriptions/:id" , (req,res) => {

})

app.listen (8800, () => {
    console.log("Server is Running")
})