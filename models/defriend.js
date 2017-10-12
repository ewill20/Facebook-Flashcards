module.exports = function(sequelize, DataTypes) {
	var Defriend = sequelize.define("Defriend", {
		text: DataTypes.STRING,
		complete: DataTypes.BOOLEAN
	});
	return Defriend;
};