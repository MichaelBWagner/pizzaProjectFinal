var express = require('express')
, router = express.Router()

var db=require("../db.js");
//change 
// this gets you: localhost:3000/getMenuItems
router.post("/getMenuItems", function(req, res){
	var collection = db.getDb().collection('menu');
	collection.find().toArray(function(err, docs){
		//nodejs() toArray() is non-block i/o callback func. will get 
		//executed once toArray() operation is done, the result is put in to the parameter docs.
	//docs contains all records from menu in 
	//js array format
	res.json(docs);
	})
})
module.exports = router
