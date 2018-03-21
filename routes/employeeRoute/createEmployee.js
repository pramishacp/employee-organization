'use strict';
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');
var createEmployee = function(req, res){
	Employee.create( req.body, function(err, employees){
		if(err)
			res.send(err);
		res.json(employees);
	});
};

module.exports = {
    create : createEmployee
};