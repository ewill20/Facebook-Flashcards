module.exports = function(sequelize, DataTypes) {
	var Defriend = sequelize.define("Defriend", {
		text: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 50]
			}
		},	
		complete: DataTypes.BOOLEAN,
		defaultValue: false
	});
	return Defriend;
};