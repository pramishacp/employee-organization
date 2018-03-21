'use strict';
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');
var listEmployee = function(req, res){
	Employee.find(function(err, employees){
		if(err)
			res.send(err);
		res.json(employees);
	});
};

module.exports = {
    list: listEmployee
};