'use strict';
var mongoose = require('mongoose');
var Organization = mongoose.model('Organization');
var listOrganization = function(req, res){
	Organization.find(function(err, organizations){
		if(err)
			res.send(err);
		res.json(organizations);
	});
};

module.exports = {
    list: listOrganization
};