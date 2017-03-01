var http=require('http');
var events=require('events');
var server=http.createServer();

var testFunction=function (req,res) {
	if(req.url!=="/favicon.ico")
		console.log('发送响应完毕');
};
server.on('request',function (req,res) {
	if(req.url!=="/favicon.ico")
		console.log('接收客户端响应');
})
server.on('request',function (req,res) {
	if(req.url!=="/favicon.ico")
		console.log(req.url);

	res.end();
});



server.on('request',testFunction);
console.log(events.EventEmitter.listenerCount(server,'request'));
//server.removeListener('request',testFunction);
server.listen(3000,"127.0.0.1");