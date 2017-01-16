var express=require('express');
var app=express();
var path=require('path');

var routes=require('./routes');

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.use(express.static('public'));

routes(app);

app.listen(3000,function(){
	console.log('start!');
})
