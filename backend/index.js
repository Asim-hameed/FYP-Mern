const express = require("express");
const app = express();
const port = 4003;
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://asim:14819470@fypcluster.js8cv1x.mongodb.net/?retryWrites=true&w=majority"
var ObjectId = require("mongodb").ObjectId;

var dbo = null;

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    dbo = db.db("FYP");
});

app.use(express.json());

app.post("/registerUser", (req, res) =>{
    const user = req.body;
    console.log(user);
    dbo.collection("User").insert(user);
    return res.json({user});
})
app.post("/addProduct", (req, res) =>{
    const prod = req.body;
    console.log(prod);
    dbo.collection("Products").insert(prod);
    return res.json({prod});
})
app.get("/getUser", (req, res) =>{
    // const user = req.body;
    // console.log(user);
    dbo.collection("User").find().toArray(function(err, users){
        if(err){
            return res.status(400).json({msg: "Error"});
        }
        console.log(users);
        return res.json({users});
    });
})
app.get("/getProd", (req, res) =>{
    // const user = req.body;
    //  console.log(user);
    dbo.collection("Products").find().toArray(function(err, prod){
        if(err){
            return res.status(400).json({msg: "Error"});
        }
        console.log(prod);
        return res.json({prod});
    });
})
app.get("/login/:email", (req, res) => {
    dbo.collection("User").find({ $or: [{email: {$regex: req.params.email}}],}).toArray(function(err, users){
        if(err){
            return res.status(400).json({msg: "Error"});
        }
        console.log(users);
        return res.json({users});
    });
})

app.listen(port, () =>{
    console.log("App is running");
})
