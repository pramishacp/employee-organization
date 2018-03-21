'use strict';
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');
var deleteEmployee = function(req, res){
	Employee.findOneAndRemove({_id:req.params.id}, function(err, employee){
		if(err)
			res.send(err);
		res.json(employee);
	});
};

module.exports = {
    delete: deleteEmployee
};