'use strict';
var mongoose = require('mongoose');
var Organization = mongoose.model('Organization');
var deleteOrganization = function(req, res){
	Organization.findOneAndRemove({_id:req.params.id}, function(err, organization){
		if(err)
			res.send(err);
		res.json(organization);
	});
};

module.exports = {
    delete: deleteOrganization
};