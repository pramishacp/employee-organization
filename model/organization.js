'use strict';
var mongoose = require('mongoose');
var Organization = new mongoose.Schema({
	
    name:String,
    place:String,
	sector:String,
	employeeCount:Number,
	

});
module.exports = {
	Organization : Organization
};