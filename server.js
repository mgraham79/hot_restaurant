var express= require('express')
var bodyParser= require('body-parser')
var path= require('path')

var app= express()

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations= []

var waitlist= []

app.get("/home", function(req,res){
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/reserve",function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/api/tables", function(req, res){
    return res.json(reservations)
})

app.post("/api/tables", function(req,res){
    var newReservation=  req.body
    if (reservations.length< 5){
        console.log(newReservation)
        reservations.push(newReservation)
        return res.json(true);
    }
    else{
        console.log(newReservation)
        waitlist.push(newReservation)
        return res.json(false)
    }
})


app.listen(PORT, function(){
    console.log("Listening on port"+ PORT)
})