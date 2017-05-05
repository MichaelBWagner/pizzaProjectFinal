var express=require("express");
var http=require("http");
var path=require("path");
var db = require('./db')
var bodyParser = require('body-parser');
var dbLink=require("./json/config.json");
var url = dbLink.devServer.url;

var exphbs = require('express-handlebars');

var app=express();

//what /////////////////////////////////////////////////////////////////////////

var hbs=exphbs.create({defaultLayout:"main"});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var publicPath=path.resolve(__dirname, "public"	);

app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.user routers
app.use(require("./routers/getMenuItems"));
app.use(require("./routers/popMenu"));

// Connect to Mongo on start
db.connect(url, function(err){
    if (err) {
    console.log('Unable to connect to Mongo.');
} else {
	app.listen(3000, function() {
      console.log('Listening on port 3000...')
    })
 }
});

app.get("/",function(req,res){
	res.sendFile(`${publicPath}/main.html`);
});

app.get("/cart",function(req,res){
		console.log("Coming a request!");
	res.sendFile(`${publicPath}/cart.html`);
});
app.get("/menu", function(req, res){//getMenuItems
		console.log("Coming a request!");
	res.sendFile(`${publicPath}/menu.html`);
});

app.get('/signup', function(req, res, next) {
  res.sendFile(`${publicPath}/signup.html`);
});

app.post('/signup', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log("post received: %s %s", username, password);
});

/*app.post('/signup', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    db.connect(dbUrl, function(err, db){
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

module.exports.app=app;
