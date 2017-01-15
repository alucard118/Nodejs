var express = require('express');
var app=express();
var fs=require('fs');

var user={
	"user4":{
		"name":"mohit",
		"password":"password4",
		"profession":"teacher",
		"id":4
	}
}
app.get('/addUser',function (req,res) {

	fs.readFile(__dirname+"/"+"users.json",'utf8',function (err,data) {
		data=JSON.parse(data);
		data['user4']=user['user4'];
		res.end(JSON.stringify(data,'',100));
		console.log(typeof(data));
		//写入字符串或buffer流，目前是个对象object
		//fs.writeFile(__dirname+"/"+"users.json",data,function (err,data) {
		//	if(err){return console.log(err)}
		//		console.log('write success!');
		//});
	})

	
})

app.get('/listUsers',function (req,res) {
	fs.readFile(__dirname+"/"+"users.json",'utf8',function (err,data) {
		console.log(data);
		res.end(data);
	});

})
var server=app.listen(8888,function () {
	var host=server.address().address;
	var port=server.address().port;
	console.log(host,port);
})