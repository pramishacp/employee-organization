'use strict';
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');
var showEmployee = function(req, res){
	Employee.findOne({_id:req.params.id}, function(err, employee){
		if(err)
			res.send(err);
		res.json(employee);
	});
};

module.exports = {
    show: showEmployee
};