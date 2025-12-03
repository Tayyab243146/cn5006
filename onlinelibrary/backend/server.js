//this code runs with mongoose v7 plus
var express = require("express")
const { default: mongoose } = require("mongoose")
let Books = require('./booksSchema')
//let mongodbConnected=require('./MongodbConnect')
const connectDB = require('./MongodbConnect').default;
const cors = require('cors');
console.log("Server2k25")
var app =express()
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
console.log("BOOKS",Books)
app.get('/',function(req,res){
console.log("this is default")
res.send("This is default")
})
app.get('/about',function (req,res){
res.send("mongodb express React and mongoose app,React runs in anotherapplication")
Books.countDocuments().exec()
 .then(count=>{
 console.log("Total documents Count before addition :", count)


 }) .catch(err => {
 console.error(err)
 })

})
app.get('/allbooksold',function(req,res){
 Books.find(function(err, allbook) {
 if (err) {
 console.log(err);
 } else {

 res.json(allbook);
 }
 });
 });