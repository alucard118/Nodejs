module.exports=function (app) {
	
	// app.get('/:name',function (req,res) {

	// 	res.render('index',{name:req.params.name,title:'BY\'s blog'});
	// });

	app.get('/',function (req,res) {
		res.render('index');

	})

	// var express=require('express');
	// var router=express.Router();
	// router.get('/:name',function (req,res) {
	// 	console.log(req.paras.name);
	// 	res.render('index',{name:req.params.name});
	// });
}