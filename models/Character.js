const mongoose = require("mongoose")

const CharacterSchema = new mongoose.Schema({
	name:{type:"string",required:true}
})

module.exports = mongoose.model("Character",CharacterSchema);