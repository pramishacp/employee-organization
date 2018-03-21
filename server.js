
/*
 * Express Dependencies
 */
var express = require('express');
var app = express();
var port = 3000;



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employees');




app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    // use'Access-Control-Allow-Origin',  '*'    for all ports
    res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});







var bodyParser = require('body-parser');

 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());
 app.use(express.static(__dirname + '/client'));


/*
* Model Importing
*/
mongoose.model('Employee',require('./model/employee').Employee);
mongoose.model('Organization',require('./model/organization').Organization);


/*
* Routes Importing
*/
var employeeCreate = require('./routes/employeeRoute/createEmployee');
var employeeList =require('./routes/employeeRoute/listEmployee');
var employeeUpdate=require('./routes/employeeRoute/updateEmployee');
var employeeDelete=require('./routes/employeeRoute/deleteEmployee');
var employeeShow=require('./routes/employeeRoute/showEmployee');

var organizationCreate = require('./routes/organizationRoute/createOrganization');
var organizationDelete = require('./routes/organizationRoute/deleteOrganization');
var organizationList = require('./routes/organizationRoute/listOrganization');
var organizationShow = require('./routes/organizationRoute/showOrganization');
var organizationUpdate = require('./routes/organizationRoute/updateOrganization');

function interceptor(req,res,next){
console.log(req.headers);

if(req.headers.authorization==="1234"){
    next();
}
else
{
    res.send(401);
}

}

//Employee
app.get('/employees',interceptor ,employeeList.list);

app.get('/employees/:id',employeeShow.show);

app.post('/employees',employeeCreate.create);
	
app.put('/employees/:id',employeeUpdate.update);
	
app.delete('/employees/:id', employeeDelete.delete);


//Organization

app.get('/organizations', organizationList.list);

app.get('/organizations/:id',organizationShow.show);

app.post('/organizations',organizationCreate.create);
	
app.put('/organizations/:id',organizationUpdate.update);
	
app.delete('/organizations/:id', organizationDelete.delete);












	
app.listen(3000, function(){
	console.log('server is running on port 3000..');
});
