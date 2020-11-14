//jshint esversion:6

const express=require("express");
const app=express();


app.get("/",function(req, res){
  res.sendFile(__dirname +"/index.html");
});

app.use(express.static("public"));  //to serve static files (images or js w/e)

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
