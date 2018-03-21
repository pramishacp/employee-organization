'use strict';
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');
var updateEmployee = function(req, res){
	var query = {
		name:req.body.name,
		dept:req.body.dept,
		area:req.body.area,
		status:req.body.status,
		contact:req.body.contact,
		salary:req.body.salary,
		followers:req.body.followers
	};
	Employee.findOneAndUpdate({_id:req.params.id}, query, function(err, employee){
		if(err)
			res.send(err);
		res.json(employee);
	});
};

module.exports = {
    update: updateEmployee
};