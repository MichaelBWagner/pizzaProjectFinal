var express = require('express')
, router = express.Router()

var db=require("../db.js");
//change 
// this gets you: localhost:3000/getMenuItems
router.get("/menu", function(req, res){
var viewModel={
    infoMenu:[]
};
	var collection = db.getDb().collection('menu');
	collection.find().toArray(function(err, docs){
        //var infoMenu="Ok try handlebars!!!";
        res.render("menu", {infoMenu})

	})
})
module.exports = router
