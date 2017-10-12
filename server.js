//dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 9000;

//requiring models for syncing
var db = require("./models");

//express app set up for parsing data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//static directory
app.use(express.static("public"));

//routes
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});