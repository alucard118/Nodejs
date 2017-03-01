var superagent=require('superagent');
var cheerio=require('cheerio');
var eventproxy=require('eventproxy');

var target_href='http://www.ccf.org.cn';

superagent.get(target_href).end(function (err,sres) {	
	if(err)
		console.log(err);

	var $=cheerio.load(sres.text);
	var items=[];

	$('.p-md .row a').each(function (idx,element) {
		var $element=$(element);
		var href=$element.attr('href');
		items.push(href);
		
	});

	var i=1;
		while(i<items.length){
			items[i]='undefined';
			i+=2;
		}
    var items2=[];
    for(i=0;i<items.length;i++)
    {
    	if(items[i]!='undefined')
    		items2.push(items[i]);
    }
     
	

	// var ep=new eventproxy();
	// ep.after('sub_content',items.length,function (topics) {
	// 	topics=topics.map(function (page) {
	// 		var topicUrl=page[0];
	// 		var $=cheerio.load(page[1]);
	// 		return ({
	// 			//title:$('#pt1312field').eq(0).text(),
	// 			href:page[0],
	// 		});
	// 	});
	// 	console.log(topics);
	// });
	 console.log(items2);
	// items.forEach(function (item) {
	// 	superagent.get(item).end(function (err,res) {
	// 		ep.emit('sub_content',[item,res.text]);
	// 	});
	// })
});