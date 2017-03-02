var express=require('express');
var router=express.Router();
var url=require('url');
var superagent=require('superagent');
var cheerio=require('cheerio');
var eventproxy=require('eventproxy');

var target_href='http://www.ccf.org.cn';

var hrefArray=[];
var imgArray=[];
var titleArray=[];
superagent.get(target_href).end(function (err,sres) {	
	if(err)
		console.log(err);

	var $=cheerio.load(sres.text);
	var items=[];
//获取新闻内容的链接
	$('.p-md .row a').each(function (idx,element) {
		var $element=$(element);
		var href=$element.attr('href');
		items.push(href);
		
	});

//去掉重复的链接
	var i=1;
		while(i<items.length){
			items[i]='undefined';
			i+=2;
		}
    
    for(i=0;i<items.length;i++)
    {
    	if(items[i]!='undefined'){
    		if(items[i].indexOf('/')==0)
    			items[i]=url.resolve(target_href,items[i]);
    		hrefArray.push(items[i]);
    	}
    }

//获取新闻列表的图片
    $('.p-md .row img').each(function (idx,element) {
    	var $element=$(element);
    	var src=$element.attr('src');
    	imgArray.push(src);
    })

 //获取新闻标题
 	
 	$('.p-md .news_c').each(function (idx,element) {
 		var $element=$(element);
 		var title=$element.attr('title');
 		titleArray.push(title);
 	})
     console.log(titleArray);
	

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
	 console.log(imgArray);
	// items.forEach(function (item) {
	// 	superagent.get(item).end(function (err,res) {
	// 		ep.emit('sub_content',[item,res.text]);
	// 	});
	// })
});

router.get('/',function (req,res) {
	res.render('index',{imgSrc:imgArray,newsHref:hrefArray,titleList:titleArray});
});
module.exports=router;