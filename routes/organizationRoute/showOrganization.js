'use strict';
var mongoose = require('mongoose');
var Organization = mongoose.model('Organization');
var showOrganization = function(req, res){
	Organization.findOne({_id:req.params.id}, function(err, organization){
		if(err)
			res.send(err);
		res.json(organization);
	});
};

module.exports = {
    show: showOrganization
};