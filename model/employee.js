'use strict';
var mongoose = require('mongoose');
var Employee = new mongoose.Schema({
	
    name:String,
	dept:String,
	area:String,
	status:String,
	contact:String,
	salary:String,
	followers:{type:Number, default:0}

});
module.exports = {
	Employee : Employee
};