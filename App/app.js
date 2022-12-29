var express=require('express');
var app=express();

app.get("/",function(req,resp)
{
    resp.send("Hello");
})

app.get("/login",function(req,resp)
{
    resp.send("Hello world");
})

app.listen(7000);

console.log("on console");