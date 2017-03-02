var express=require('express');
var path=require('path');

var app=new express();
var indexRouter=require('./routes/index');
app.use('/',indexRouter);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.listen('3000',function () {
	console.log('App is running at port 3000');
})
