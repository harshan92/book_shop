var express=require('express');
var http = require('http');
var bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Hello World!");
})


app.listen(process.env.PORT || 3000, function(){
    console.log("Server running...");
});