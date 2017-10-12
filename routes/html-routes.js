//dependencies
var db = require("../models");

//routes
module.exports = function(app) {
	//GET route for getting all of the defrienders
	app.get("/api/defriendArray", function(req, res) {
		//findAll returns all entries for a table when used with no options
		db.Defriend.findAll({}).then(function(dbDefriend) {
			//access to the defriend list as an argument inside of the callback funciton
			res.json(dbDefriend);
		});
	});

	//POST route for saving a defriended facebook friend
	app.post("/api/defriendArray", function(req, res) {
		//create is taking an argument of an object describing the item we want to 
		//insert into the table. In this case we just pass in an object
		//with a text and complete property
		db.Defriend.create({
			text: req.body.text,
			complete: req.body.complete
		}).then(function(dbDefriend) {
			//access to the new defriend as an argument inside of the callback function
			res.json(dbDefriend);
		});
	});

	// DELETE route for deleting defrienders. We can get the id of the defriend to
	//be deleted from req.params.id
	app.delete("/api/defriendArray/:id", function(req, res) {
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
	app.put("/api/defriendArray", function(req, res) {
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
		});
	});
};