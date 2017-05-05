/*var express = require('express')
, router = express.Router()

var db=require("../db.js");*/
var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017/pizza-project';
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();



/*router.post('/signup', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    mongo.connect(dbUrl, function(err, db){
        if(err) {
            console.log("Cannot connect to mongodb server", err);
            res.json(false);
        } else {
            var collection = db.collection('account');

            collection.insertOne({
                username: username,
                password: password
            }).then(function(r){
                if(r.insertedCount){
                    console.log("Insert success");
                } else {
                    console.log("Insert failed");
                }
                db.close();
                res.redirect('/');
            });
        }
    });   
});*/

module.exports = router;