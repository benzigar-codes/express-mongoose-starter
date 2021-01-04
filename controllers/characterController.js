const Character = require("../models/Character.js")
module.exports.all = async (req,res) => {
	const characters = await Character.find()
	res.status(200).json({
		characters
	})
}
