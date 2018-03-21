'use strict';
var mongoose = require('mongoose');
var Organization = mongoose.model('Organization');
var updateOrganization = function(req, res){
	var query = {
		name:req.body.name,
		place:req.body.place,
        sector:req.body.sector,
		employeeCount:req.body.employeeCount
		
	};
	Organization.findOneAndUpdate({_id:req.params.id}, query, function(err, organization){
		if(err)
			res.send(err);
		res.json(organization);
	});
};

module.exports = {
    update: updateOrganization
};