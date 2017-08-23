                                  //  mongod --dbpath /data/db --smallfiles
var express = require ("express"),

 app = express();

// var mongoose         = require("mongoose"),     "mongoose": "^4.11.6"

 var ejs                 =require("ejs"),

 bodyParser        = require("body-parser");

  


app.set("view engine","ejs");
//  mongoose.connect("mongodb://chris:123@ds055742.mlab.com:55742/jamiesite");  //"mongodb://localhost/customSite"||
 app.use(express.static(__dirname + "/public"));     //Makes linking to public folder automatic- in this instance for stylesheet in header.



app.get("/",function(req,res){
    res.render("homepage");
})

app.get("/contact",function(req,res){
    res.render("contact");
})

app.get("/services",function(req,res){
    res.render("services");
})

app.get("/about",function(req,res){
    res.render("about");
})

app.get("/projects",function(req,res){
    res.render("projects");
})





 
 app.listen(process.env.PORT,process.env.IP,function(){
     console.log("Portfolio Ready!");
 })
 
 
