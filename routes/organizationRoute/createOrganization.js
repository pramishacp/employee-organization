'use strict';
var mongoose = require('mongoose');
var Organization = mongoose.model('Organization');
var createOrganization = function(req, res){
	Organization.create( req.body, function(err, organizations){
		if(err)
			res.send(err);
		res.json(organizations);
	});
};

module.exports = {
    create : createOrganization
};