//dependencies
var db = require("../models");
var path = require("path");

//routes
module.exports = function(app) {
	//get route for html
	app.get("/", function(request, result) {
		result.sendFile(path.join(__dirname + "/../defriendr.html"));
		console.log("Sending User home");
	});
	//get route for flashcard html
	app.get("/flashcard", function(request, result) {
		result.sendFile(path.join(__dirname + "/../defriendr2.html"));
		console.log("sending User to Flashcard")
	});
	//GET route for getting all of the defrienders
	app.get("/api/defriendList", function(req, res) {
		//findAll returns all entries for a table when used with no options
		db.Defriend.findAll({}).then(function(dbDefriend) {
			//access to the defriend list as an argument inside of the callback funciton
			res.json(dbDefriend);
			console.log("user is going to api defriend list")
		});
	});

	//POST route for saving a defriended facebook friend
	app.post("/api/defriendList", function(req, res) {
		//create is taking an argument of an object describing the item we want to
		//insert into the table. In this case we just pass in an object
		//with a text and complete property
		db.Defriend.create({
			text: req.body.text,
			complete: req.body.complete
		}).then(function(dbDefriend) {
			//access to the new defriend as an argument inside of the callback function
			res.json(dbDefriend);
			console.log("Positing to defriend list API")
		})
		.catch(function(err) {
			res.json(err);
		});
	});

	// DELETE route for deleting defrienders. We can get the id of the defriend to
	//be deleted from req.params.id
	app.delete("/api/defriendList/:id", function(req, res) {
		//specifying which defriend we want to destroy with "where"
		db.Defriend.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbDefriend) {
			res.json(dbDefriend);
		});
	});

	//PUT route for updating defriends. We can get the updated defriend data fromr req.body
	app.put("/api/defriendList", function(req, res) {
		//update takes in an object describing the properties we want to update
		//and we use where to describe which objects we want to update
		db.Defriend.update({
			text: req.body.text,
			complete: req.body.complete
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(dbDefriend) {
			res.json(dbDefriend);
		})
		.catch(function(err) {
			res.json(err);
		});
	});
};
