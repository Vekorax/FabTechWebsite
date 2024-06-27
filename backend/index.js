const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all reviews
app.get("/reviews", (req,res)=>{
db.query("SELECT * FROM reviews", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one review
app.get("/reviews/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM reviews WHERE id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating a review
app.post('/review/create', (req,res)=> {

const name = req.body.name;
const review = req.body.review;
const text = req.body.stars;

db.query("INSERT INTO reviews (name, review, stars) VALUES (?,?,?)",[name,review,text], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to delete a review

app.delete('/review/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM reviews WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
    console.log(`HELL YEAH BROTHER`)
})