module.exports=function (app) {
	
	

	app.get('/',function (req,res) {
		res.render('index',{name:''});

	})

	// var express=require('express');
	// var router=express.Router();
	// router.get('/:name',function (req,res) {
	// 	console.log(req.paras.name);
	// 	res.render('index',{name:req.params.name});
	// });
}