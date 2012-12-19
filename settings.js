// window//
var my_hottest_alert = false;
var my_send_mail_alert = false;
var my_group_alert = false;
var my_multiple_alert = false;
var tick;
var tickk;
var tick1;
var tick2;
var alert_category = false;
var alert_company = false;
var feedback_view;
var pWidth = Ti.Platform.displayCaps.platformWidth;
Ti.include("/ui/common/hotLogic.js");
var alert_view;
var headerview;
var tbl; 
var made_hot_value;
var followed_value;

var hot_count;
var followed_count;

var customActivity = null;

var activityIndicator = Titanium.UI.createActivityIndicator({
  font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
  message: 'Loading...'
  // style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
});

var timeOutWin = null;

var domainName = 'https://limitless-dusk-9898.herokuapp.com'
// var domainName = 'https://fathomless-mountain-8424.herokuapp.com';



function settings(title,category_options,category_options_id,company_options,company_options_id,hot_user_id,user_data,window_login) {
	//var category_options = [];
	
		
	var doDelay=500;
	if(Titanium.Platform.osname === 'android'){
		doDelay=2000;
	}

	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white',
		navBarHidden:true
	});
	
	self.orientationModes = [
    Titanium.UI.PORTRAIT];
	
// views//

self.add(activityIndicator)
// var main=Ti.UI.createView({
	// top:0,
	// backgroundColor:'white',
	// bottom:0,
	// right:0,
	// left:0,
// })	

 headerview = Ti.UI.createView({
	backgroundColor:'#9ABF6F',
	backgroundGradient:{type:'linear', colors: [ { color: '#99C06F', offset: 0.0}, { color: '#8BB25C', offset: 0.25 }, { color: '#76A145', offset: 1.0 } ], startPoint:{x:0,x:100,y:0}, endPoint:{x:100,y:100},backFillStart:false},
	top:0,
	right:'auto',
	left:'auto',
	height:40
	
});
var pwidth1 = Ti.Platform.displayCaps.platformWidth;
pwidth=(pwidth1-20)/3;
var profile= Ti.UI.createButton({
	backgroundImage:'/images/green_tab_active.jpg',
	top:5,
	bottom:5,
	title:'Profile',
	textAlign:'center',
	color:'white',
	font:{fontWeigt:'bold'},
	left:10,
	width:pwidth,
	height:30
});

var alert_setting= Ti.UI.createButton({
	backgroundImage:'/images/green_tab.jpg',
	top:5,
	bottom:5,
	title:'Alerts',
	textAlign:'center',
	color:'#3E5F18',
	font:{fontWeigt:'bold'},
		left:10+pwidth+1,
	width:pwidth,
	height:30
});

var feedback= Ti.UI.createButton({
	backgroundImage:'/images/green_tab.jpg',
	title:'Feedback',
	textAlign:'center',
	color:'#3E5F18',
	font:{fontWeigt:'bold'},
	top:5,
	bottom:5,
	left:10+pwidth+pwidth+1,
	width:pwidth,
	height:30
});


headerview.add(profile);
headerview.add(alert_setting);
headerview.add(feedback);
 var User_view = Ti.UI.createTableViewRow({
 	backgroundColor:'white',
 	height:144
 });
var brownview=Ti.UI.createView({
		top:1,
		left:0,
		right:0,
		height:40,
		backgroundColor:'#D7CEB1',
    	backgroundGradient:{type:'linear', colors: [ { color: '#E3DCC3', offset: 0.0}, { color: '#E3DCC4', offset: 0.25 }, { color: '#E3DCC3', offset: 1.0 } ], startPoint:{x:0,y:0}, endPoint:{x:2,y:50},backFillStart:false},
	});
	
	brownview.addEventListener('click',function(e){
		//Ti.API.info("clicked");
		//var share = createShareOptions()
		//Ti.Android.currentActivity.startActivity(share);
		if(Titanium.Platform.osname.indexOf('iphone')<0){
			//var share = createShareOptions();
			//Ti.Android.currentActivity.startActivity(share);
		}else{
			Ti.API.info("iphone");
		}
		
	});
	
	var brownlabel1=Ti.UI.createLabel({
		color: '#333',
  font: { fontSize:16 },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:' Membership status',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:10,
  right:40,
  top:7,
  width: 'auto', height: 'auto'
	});
	
var icon=Ti.UI.createImageView({
	image:'/images/info_icon.png',
	right:4,
	height:30,
	wigth:30,
	
});
brownview.add(icon);

icon.addEventListener('click',function(){
	info_window('REWARDS','However, to us, the social element is just as important as the deals. You can earn rewards, collect badges and the more deals you participate in, the more your membership status rises...and your vote power too! ');
})
	
brownview.add(brownlabel1);

// User Status/body//

 
 var user_image=Ti.UI.createImageView({
 	image:'/images/avatar.png',
 	top:55,
 	left:10,
 	height:80,
 	width:80,
 });
 
 var user_name = Ti.UI.createLabel({
 		color: '#333',
  font: { fontSize:14,fontWeight:'bold' },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:' [username]',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:93,
  right:50,
  top:53,
  width: 'auto', height: 'auto'
 });
 
 var membership_status= Ti.UI.createLabel({
 		color: '#597C01',
  font: { fontSize:14,fontWeight:'bold' },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:'[Membership Status]',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:97,
  right:40,
  top:75,
  width: 'auto', height: 'auto'
 });
 var location = Ti.UI.createLabel({
 		color: '#333',
  font: { fontSize:11 },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:' [Location]',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  right:16,
  top:77,
  width: 'auto', height: 'auto'
 });
  var description= Ti.UI.createLabel({
 		color: '#333',
  font: { fontSize:9},
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:'[description,description,description,description,description,description,descriptiondescription]',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:97,
  right:5,
  top:100,
  // width: 'auto', height: 'auto'
 });
 
 var voting_power= Ti.UI.createLabel({
 		color: '#9A1716',
  font: { fontSize:12,fontWeight:'bold'},
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:'VOTING POWER:',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:97,
  bottom:5,
  width: 'auto', height: 'auto'
 });
  var voting_count= Ti.UI.createLabel({
 		color: '#9A1716',
  font: { fontSize:12,fontWeight:'bold'},
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:'+1',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:200,
  bottom:5,
  // width: 'auto', height: 'auto'
 });
 
 
 

User_view.add(brownview); 	
User_view.add(voting_count);
User_view.add(voting_power);
User_view.add(description);
User_view.add(location);
User_view.add(membership_status);
User_view.add(user_name);
User_view.add(user_image);




function makeRow(image,title,level,description,j) {
	// generate random string of digits and capital English letters
	// see https://en.wikipedia.org/wiki/Base_36
	 var tvr= Ti.UI.createTableViewRow({
	 	level:level,
	 	i:j
	 	
		//title: Math.random().toString(36).substring(7)
	});
	var whiteview=Ti.UI.createView({
		top:0,
		left:0,
		right:0,
		height:80,
		backgroundColor:"white"
	});
	var title=Ti.UI.createLabel({
		text:title,
		color:'#597C01',
		font:{fontSize:13,fontWeight:'bold'},
		left:10,
		//width:110,
		top:2,
		right:10,
	});
	var badge_image=Ti.UI.createImageView({
 		image:image,
 		top:33,
 		left:10,
 		height:35,
 		width:28,
 	});
 	
 	if(level=='Lvl.0')
 	{
 		level=''
 	}
 	var lvl=Ti.UI.createLabel({
		text:level,
		color:'#597C01',
		font:{fontSize:13,fontWeight:'bold'},
		left:55,
		//width:110,
		top:37,
		width:30,
	});
	var des=Ti.UI.createLabel({
		text:description,
		color:'black',
		font:{fontSize:12,fontWeight:'bold'},
		left:90,
		//width:110,
		top:35,
		right:80,
	});
	var next=Ti.UI.createLabel({
		text:'Next Level',
		color:'blue',
		font:{fontSize:14},
		right:10,
		width:40,
		height:33,
		top:30,
		
	});
	whiteview.add(title);
	whiteview.add(badge_image);
	whiteview.add(des);
	whiteview.add(lvl);
	whiteview.add(next)

next.addEventListener('click',function(){
	if(tvr.i==1)
	{
		if(tvr.level=='Lvl.0')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Made a Deal Hot')
			
		}
		if(tvr.level=='Lvl.1')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Made 10 Hot Deals')
		}
		if(tvr.level=='Lvl.2')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Made 50 Hot Deals')
		}
		if(tvr.level=='Lvl.3')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Made 100 Hot Deals')
		}
		if(tvr.level=='Lvl.4')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Made 500 Hot Deals')
		}
		if(tvr.level=='Lvl.5')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('You At your best')
		}
	}
	if(tvr.i==2)
	{
		if(tvr.level=='Lvl.0')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Followed a Company')
			
		}
		if(tvr.level=='Lvl.1')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Followed 5 Companies')
		}
		if(tvr.level=='Lvl.2')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Followed 10 Companies')
		}
		if(tvr.level=='Lvl.3')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Followed 15 Companies')
		}
		if(tvr.level=='Lvl.4')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Followed 20 Companies')
		}
		if(tvr.level=='Lvl.5')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('You At your best')
		}
	}	
	if(tvr.i==3)
	{
		if(tvr.level=='Lvl.0')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Length of Membership 7-20 Days')
			
		}
		if(tvr.level=='Lvl.1')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Length of Membership 21-50 Days')
		}
		if(tvr.level=='Lvl.2')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Length of Membership 51-90 Days')
		}
		if(tvr.level=='Lvl.3')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Length of Membership 91-180 Days')
		}
		if(tvr.level=='Lvl.4')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Length of Membership more than 180 Days')
		}
		if(tvr.level=='Lvl.5')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('You At your best')
		}
	}	
	if(tvr.i==4)
	{
		if(tvr.level=='Lvl.0')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Shared deals(Fb/Tw/G+ or e-mail) that receive HQ8D visit')
			
		}
		if(tvr.level=='Lvl.1')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Shared deals(Fb/Tw/G+ or e-mail) that receive 10 HQ8D visit')
		}
		if(tvr.level=='Lvl.2')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Shared deals(Fb/Tw/G+ or e-mail) that receive 50 HQ8D visit')
		}
		if(tvr.level=='Lvl.3')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Shared deals(Fb/Tw/G+ or e-mail) that receive 100 HQ8D visit')
		}
		if(tvr.level=='Lvl.4')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Shared deals(Fb/Tw/G+ or e-mail) that receive 300 HQ8D visit')
		}
		if(tvr.level=='Lvl.5')
		{
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('You At your best')
		}
	}


})

tvr.add(whiteview)
return tvr;




}
var tbl = Ti.UI.createTableView({
	top:40,
	separatorColor:'black',
	// search:searchbar,
	// hideSearchOnSelectioshn: true,
	// keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    // returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	
});




//for(var i=0; i<4; i++) {
	
	
	
	
	//image='/images/achievment_image1.png'
	//data.push(makeRow(image,"Are you Hot Supreme Court Deal Judge?", "Lvl.1","Made some hot Made a hot deal"));
//}

var account_view=Ti.UI.createTableViewRow({
	backgroundColor:'white',
	height:'auto'
});
var brownviewA=Ti.UI.createView({
	top:0,
	left:0,
	right:0,
	height:40,
	backgroundColor:'#D7CEB1',
    backgroundGradient:{type:'linear', colors: [ { color: '#E3DCC3', offset: 0.0}, { color: '#E3DCC4', offset: 0.25 }, { color: '#E3DCC3', offset: 1.0 } ], startPoint:{x:0,y:0}, endPoint:{x:2,y:50},backFillStart:false},
});
var brownlabelA=Ti.UI.createLabel({
	color: '#333',
	font: { fontSize:16 },
	text:'Account',
	left:10,
	right:40,
	top:7,
	width: 'auto',
	height: 'auto'
});
var ic=Ti.UI.createImageView({
	image:'/images/info_icon.png',
	right:4,
	height:30,
	wigth:30
});

brownviewA.add(brownlabelA);
brownviewA.add(ic);
account_view.add(brownviewA);

ic.addEventListener('click',function(){
	info_window('Membership & Achivements','Your HotQ8Deals details and social statistics');
})

var member=Ti.UI.createLabel({
	color: 'black',
	font: { fontSize:12,fontWeight:'bold' },
	text:'Member:',
	left:10,
	top:55,
	width: 'auto', height: 'auto'
});
var member_value=Ti.UI.createLabel({
	color: '#597C01',
	font: { fontSize:13,fontWeight:'bold' },
	text:'Membership date',
	right:50,
	top:55,
	width: 'auto', height: 'auto'
});
account_view.add(member);
account_view.add(member_value)
var active=Ti.UI.createLabel({
	color: 'black',
	font: { fontSize:12,fontWeight:'bold' },
	text:'Last active DATE',
	left:10,
	top:80,
	width: 'auto', height: 'auto'
});
var active_value=Ti.UI.createLabel({
	color: '#597C01',
	font: { fontSize:13,fontWeight:'bold' },
	text:'last active',
	right:50,
	top:80,
	width: 'auto', height: 'auto'
});
account_view.add(active)
account_view.add(active_value)

var deals_views=Ti.UI.createLabel({
	color: 'black',
	font: { fontSize:12,fontWeight:'bold' },
	text:'Deals Views:',
	left:10,
	top:105,
	width: 'auto', height: 'auto'
});
var deals_views_value=Ti.UI.createLabel({
	color: '#597C01',
	font: { fontSize:13,fontWeight:'bold' },
	text:'123',
	right:50,
	top:105,
	width: 'auto', height: 'auto'
});
account_view.add(deals_views)
account_view.add(deals_views_value);

var made_hot=Ti.UI.createLabel({
	color: 'black',
	font: { fontSize:12,fontWeight:'bold' },
	text:'Deals made hot',
	left:10,
	top:130,
	width: 'auto', height: 'auto'
});
 made_hot_value=Ti.UI.createLabel({
	color: '#597C01',
	font: { fontSize:13,fontWeight:'bold' },
	text:'23',
	right:50,
	top:130,
	width: 'auto', height: 'auto'
});
account_view.add(made_hot)
account_view.add(made_hot_value)

var followed=Ti.UI.createLabel({
	color: 'black',
	font: { fontSize:12,fontWeight:'bold' },
	text:'Followed Companies',
	left:10,
	top:155,
	width: 'auto', height: 'auto'
});
 followed_value=Ti.UI.createLabel({
	color: '#597C01',
	font: { fontSize:13,fontWeight:'bold' },
	text:'5',
	right:50,
	top:155,
	width: 'auto', height: 'auto'
});
account_view.add(followed);
account_view.add(followed_value)

var shared=Ti.UI.createLabel({
	color: 'black',
	font: { fontSize:12,fontWeight:'bold' },
	text:'Recieved Hot Q8 Deals visits via deals you shared:',
	left:10,
	right:80,
	top:180,
	width: 'auto', height: 'auto'
});
var shared_value=Ti.UI.createLabel({
	color: '#597C01',
	font: { fontSize:13,fontWeight:'bold' },
	text:'12',
	right:50,
	top:180,
	width: 'auto', height: 'auto'
});
account_view.add(shared)
account_view.add(shared_value)
var brownview_language=Ti.UI.createView({
	top:230,
	left:0,
	right:0,
	height:40,
	backgroundColor:'#D7CEB1',
    backgroundGradient:{type:'linear', colors: [ { color: '#E3DCC3', offset: 0.0}, { color: '#E3DCC4', offset: 0.25 }, { color: '#E3DCC3', offset: 1.0 } ], startPoint:{x:0,y:0}, endPoint:{x:2,y:50},backFillStart:false},
});
var brownlabel_language=Ti.UI.createLabel({
	color: '#333',
	font: { fontSize:16 },
	text:'Language Selection',
	left:10,
	right:40,
	top:7,
	width: 'auto', height: 'auto'
});
brownview_language.add(brownlabel_language)
account_view.add(brownview_language)
var english_button=Ti.UI.createButton({
	backgroundImage:'/images/blue_background.png',
	top:290,
	title:'English',
	color:'white',
	textAlign:'center',
	
	// width:pWidth+10,
	width:130,
	height:40,
	// right : 173,
	left : 10
});
english_button.addEventListener("click",function(){
	if(timeOutWin){
		timeOutWin.close();	
	}
	timeOutWin = showMessageTimeout("Language Changed To: English",4000)
});
var arabic_button=Ti.UI.createButton({
	// backgroundFocusedColor:'#3E8AC4',
	backgroundImage:'/images/grey_button.png',
	top:290,
	title:'Arabic',
	color:'black',
	textAlign:'center',
	
	// width:pWidth+10,
	width:130,
	height:40,
	// right : 173,
	right: 10
});
arabic_button.addEventListener("click",function(){
	if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout("Coming soon",4000)
});
var white= Ti.UI.createView({
	backgroundColor:'white',
	right:0,
	left:0,
	top:340,
	height:60
})
var signOut=Ti.UI.createButton({
	backgroundImage:'/images/signout.png',
	
	top:10,
	// title:'Sign Out',
	textAlign:'center',
	
	// width:pWidth+10,
	// width:pwidth1,
	height:40,
	
	// right : 173,
	left:10,
	right: 10,
});    
signOut.addEventListener('click',function(){

	if(Titanium.Platform.osname.indexOf('iphone')> -1){
		if(customActivity){
			customActivity.close();
			customActivity = null;
		}
			customActivity = customActivityIndicator();
		}else{
			activityIndicator.show();
		}
	
  
	var db = Titanium.Database.open('hotq8deals');
	db.execute('delete from login_data');
	db.close();
	Titanium.Facebook.logout();
	Titanium.Facebook.accessToken = null;
	if(timeOutWin){
				timeOutWin.close();	
			}
		if(Titanium.Platform.osname.indexOf('iphone')> -1){
			customActivity.close();
		}else{
			activityIndicator.hide();
		}
			timeOutWin = showMessageTimeout('Sign Out successfull');

		window_login.open();
});
white.add(signOut);
account_view.add(english_button);
account_view.add(arabic_button);
account_view.add(white);

user_name.text = user_data.name;

description.text = user_data.description;
voting_count.text = user_data.voting_power;
membership_status.text = user_data.status;
if(user_data.membership_date != null){
	member_value.text = user_data.membership_date.substring(0,10);	
}
if(user_data.lastactive_date != null){
	active_value.text = user_data.lastactive_date.substring(0,10);	
}

hot_count= user_data.deals_made_hot;
followed_count=user_data.followed_stores;

location.text = user_data.location;
deals_views_value.text = user_data.deals_viewed;
made_hot_value.text =hot_count;
followed_value.text = followed_count;
shared_value.text = user_data.received_hot;



			
 

var url= domainName + '/en/mobile/get_batches.json?user_id='+hot_user_id;
Ti.API.info(url);
var get_batches = Titanium.Network.createHTTPClient();	
get_batches.open('GET', url);
get_batches.timeout = 10000;
get_batches.send();
//get_categories.setRequestHeader("content-type", "application/json");
Ti.API.info("sent batches..........................XXXXXXXXxXXXXXXX");
//get_categories.send(JSON.stringify(user));
		get_batches.onerror = function(){
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Connection Problem, Please try again');
		}

get_batches.onload = function()
{
	Ti.API.info("received batches ...........YYYYYYYYYyYYYYYYYYY")
	//alert("a");
	var data = [];
	data.push(User_view);
	//var data = [];	
	Ti.API.info("received batches .............YYYYYYYYYYyYYYYYYYYY");
	var response = JSON.parse(this.responseText);
	//alert("b");
	//alert(response.overall_image_path);
	if(response!=null)
	{
		Ti.API.info(JSON.stringify(response));
		data.push(makeRow('http://hotq8deals.goodlogics.com' + '' +response.hot_image_path,response.hot_batch_overall_text, "Lvl."+response.hot_batch,response.hot_batch_text,1));
		data.push(makeRow('http://hotq8deals.goodlogics.com' + ''+response.follow_image_path,response.follow_batch_overall_text, "Lvl."+response.follow_batch,response.follow_batch_text,2));
		
		data.push(makeRow('http://hotq8deals.goodlogics.com' + ''+response.vetarn_image_path,response.vetarn_batch_overall_text, "Lvl."+response.vetarn_batch,response.vetarn_batch_text,3));
		
		data.push(makeRow('http://hotq8deals.goodlogics.com'+ ''+response.share_image_path,response.share_batch_overall_text, "Lvl."+response.share_batch,response.share_batch_text,4));
		
		user_image.image='http://hotq8deals.goodlogics.com' + ''+response.overall_image_path;
		if(Titanium.Facebook.uid != null){
			var f_image_url = 'http://graph.facebook.com/'+Titanium.Facebook.uid+'/picture';
			Ti.API.info(f_image_url);
			user_image.image = f_image_url;
		}
	}
	
		data.push(account_view);
		tbl.data = data;

}











// self.add(main);
// self.add(searchbar);
// self.add(buttonview);

profile.addEventListener('click',function(){
	
	profile.backgroundImage= '/images/green_tab_active.jpg'
	feedback.backgroundImage = '/images/green_tab.jpg'
	alert_setting.backgroundImage = '/images/green_tab.jpg';
	profile.color='white';
	feedback.color='#3E5F18';
	alert_setting.color='#3E5F18';
	
	alert_view.hide();
	feedback_view.hide();
	
	tbl.show();
	headerview.show();

	
	});
	
	
											//Alert view Start//
											
											
var url= domainName + '/en/mobile/get_user_alerts.json?user_id='+hot_user_id;
// alert(url)
//alert("request....alert");
var get_alerts = Titanium.Network.createHTTPClient();	
get_alerts.open('GET', url);
//get_categories.setRequestHeader("content-type", "application/json");
Ti.API.info("sent");
get_alerts.timeout = 10000;
get_alerts.send();
		get_alerts.onerror = function(){
			if(Titanium.Platform.osname.indexOf('iphone')> -1){
			customActivity.close();
		}else{
			activityIndicator.hide();
		}
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Connection Problem, Please try again');
		}

get_alerts.onload = function()
{
	var data = [];	

	Ti.API.info("received");
	var response = JSON.parse(this.responseText);
	//alert(JSON.stringify(response));
	if(response!=null)
	{
		my_hottest_alert = response.daily_hottest_deal_alert;
		my_send_mail_alert = response.daily_send_email;
		my_group_alert = response.group;
		my_multiple_alert = response.multiple;
		if(Titanium.Platform.osname.indexOf('iphone')> -1){
			customActivity.close();
		}else{
			activityIndicator.hide();
		}
	}
	
}
											
											
											

		 alert_view=Ti.UI.createView({
		backgroundColor:'white',
		top:40,
		bottom:0,
		left:0,
		right:0,
	});
	

var table = Ti.UI.createTableView({
	separatorColor:'#D9D9D9'
});

var rows=[];

var row1 = Ti.UI.createTableViewRow({
	backgroundColor:'white',
	height:100
});
var brownview1=Ti.UI.createView({
		top:0,
		left:0,
		right:0,
		height:35,
		backgroundColor:'#D7CEB1',
    	backgroundGradient:{type:'linear', colors: [ { color: '#E3DCC3', offset: 0.0}, { color: '#E3DCC4', offset: 0.25 }, { color: '#E3DCC3', offset: 1.0 } ], startPoint:{x:0,y:0}, endPoint:{x:2,y:50},backFillStart:false},
	});
	var brownlabel1=Ti.UI.createLabel({
		color: '#333',
  font: { fontSize:14 },
  text:'Email Subscription',
  left:10,
  right:35,
  top:7,
  width: 'auto', height: 'auto'
	});
	
var icon=Ti.UI.createImageView({
	image:'/images/info_icon.png',
	right:4,
	height:30,
	wigth:30,
	
});
icon.addEventListener('click',function(){
	info_window('Email Subscription','Set a deal alert to get immediate notification about hottest or newest offers you might be interested in.')
})
brownview1.add(icon);
	
brownview1.add(brownlabel1);

row1.add(brownview1);

var whiteview1 = Ti.UI.createView({
	backgroundcolor:'white',
	top:30,
	bottom:-8,
	left:-5,
	right:'auto',

	// layout:'horizontal',
});
var whitelabel1=Ti.UI.createLabel({
		color: '#333',
  font: { fontSize:14 },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:'Subscribe to HOT Q8 Deals 10 hottest deals alerts',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:55,
  top:30,
  right:10,
  width: 'auto', height: 'auto'
	});
	whiteview1.add(whitelabel1);
	
	 tick = Ti.UI.createButton({
		top:33,
		left:20,
		width:30,
		height:25,
		backgroundImage:'/images/tick.png'
	});
		whiteview1.add(tick);
	tick.addEventListener('click',function(){
	if(! my_hottest_alert)
	{	
		 my_hottest_alert = true;
		  tick.backgroundImage='/images/tick_image.png'		
	}
	else
	{	
		 my_hottest_alert = false;
		 tick.backgroundImage = '/images/tick.png';
	}
	
})

	row1.add(whiteview1);



var row2 = Ti.UI.createTableViewRow({
	backgroundColor:'white',
	height:340
});

var whiteview2 = Ti.UI.createView({
	backgroundcolor:'white',
	top:0,
	bottom:-8,
	left:-5,
	right:'auto',

	// layout:'horizontal',
});
var whitelabel2=Ti.UI.createLabel({
		color: '#333',
  font: { fontSize:14 },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:'Subscride to Daily Alerts',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:55,
  top:10,
  right:10,
  width: 'auto', height: 'auto'
});
 tickk = Ti.UI.createButton({
		top:10,
		left:20,
		width:30,
		height:25,
		backgroundImage:"/images/tick.png"
	});
	
	
	

	var main = 0;
	tickk.addEventListener('click',function(){
		
		
		if(main==0)
		{
							my_send_mail_alert = true;
				my_group_alert = true;
				my_multiple_alert = true;

			tickk.backgroundImage='/images/tick_image.png';
			tick1.backgroundImage = '/images/tick_image.png';
			tick2.backgroundImage = '/images/tick_image.png';
			main=1;
		}
		else{
				my_send_mail_alert = false;
				my_group_alert = false;
				my_multiple_alert = false;

			tickk.backgroundImage='/images/tick.png';
			tick1.backgroundImage = '/images/tick.png';
			tick2.backgroundImage = '/images/tick.png';
			main=0;
		}
			
	})
	
	
var whitelabel3=Ti.UI.createLabel({
		color: '#333',
  font: { fontSize:12 },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:'Send me deals from selected category',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:55,
  top:55,
  right:10,
  width: 'auto', height: 'auto'
});
var blue_category = Ti.UI.createLabel(
{
	top:85,
	left:55,
	font:{fontSize:11},
	text:'Select category',	
	color:'#1167AA',
	width:'auto'
});
var drop_dwn1 = Ti.UI.createImageView({
	image:'/images/blue_arow.png',
	right:pWidth/3,
	top:88,
	height:10,
	width:10
});

var opts = {
  //cancel: 0,
  options: category_options,
  //selectedIndex: 0,
  //destructive: 1,
  title: 'Categories'
};
var dialog = Ti.UI.createOptionDialog(opts)
blue_category.addEventListener('click',function(e){
	//alert("clicked");
	dialog.show();
});
drop_dwn1.addEventListener('click',function(e){
	//alert("clicked");
	dialog.show();
});
dialog.addEventListener('click',function(e){
	category_index = e.index
	Ti.API.info(category_options_id[e.index]);
	blue_category.text = category_options[e.index];
	alert_category = category_options[e.index];
});	

var whitelabel4=Ti.UI.createLabel({
		color: '#333',
  font: { fontSize:12 },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:'Send me deals from selected company',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:55,
  top:115,
  right:10,
  width: 'auto', height: 'auto'
});
var blue_categ = Ti.UI.createLabel(
{
	top:145,
	left:55,
	font:{fontSize:11},
	text:'Select company',	
	color:'#1167AA',
	width:'auto'
});
var drop_dwn2 = Ti.UI.createImageView({
	image:'/images/blue_arow.png',
	right:pWidth/3,
	top:148,
	height:10,
	width:10
});
var opts2 = {
  //cancel: 0,
  options: company_options,
  //selectedIndex: 0,
  //destructive: 1,
  title: 'Companies'
};
var dialog2 = Ti.UI.createOptionDialog(opts2)
blue_categ.addEventListener('click',function(e){
	dialog2.show();
});
drop_dwn2.addEventListener('click',function(e){
	dialog2.show();
});

dialog2.addEventListener('click',function(e){
	company_index = e.index
	Ti.API.info(company_options_id[e.index]);
	blue_categ.text = company_options[e.index]
	alert_company = company_options[e.index]
});	

tick1 = Ti.UI.createButton({
	top:178,
	left:55,
	width:15,
	height:11,
	backgroundImage:"/images/tick.png"
});

var whitelabel5=Ti.UI.createLabel({
		color: '#333',
  font: { fontSize:12 },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:'Send multiple emails(multiple deals into multiple emails)',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:75,
  top:175,
  right:10,
  width: 'auto', height: 'auto'
	});

	whitelabel5.addEventListener('click',function(){
		if(!my_multiple_alert)
		{
					my_send_mail_alert = true;
				my_multiple_alert = true;
			tick1.backgroundImage='/images/tick_image.png'
		}
		else{
						
						if(	my_group_alert =false)
							{
								my_send_mail_alert = false;
							}
				my_multiple_alert = false;
				tick1.backgroundImage= '/images/tick.png';
		}		
	})

	 tick2 = Ti.UI.createButton({
		top:223,
		left:55,
		width:15,
		height:11,
		backgroundImage:"/images/tick.png"
	});

var whitelabel6=Ti.UI.createLabel({
		color: '#333',
  font: { fontSize:12 },
  // shadowColor: '#aaa',
  // shadowOffset: {x:5, y:5},
  text:'Send one group email(combines multiple deals into one email)',
  // textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  left:75,
  top:220,
  right:10,
  width: 'auto', height: 'auto'
	});

whitelabel6.addEventListener('click',function(){
		if(!my_group_alert)
		{
			my_send_mail_alert = true;
			my_group_alert = true;
			tick2.backgroundImage='/images/tick_image.png'
		}
		else{
						
			if(	my_multiple_alert =false){
				my_send_mail_alert = false;
			}
			my_group_alert = false;
			tick2.backgroundImage= '/images/tick.png';
		}		
});

var submt=Ti.UI.createButton({
	bottom:20,
	height:35,
	right:30,
	width:pwidth1/2,
	backgroundImage:'/images/submit_button.png'
});

	whiteview2.add(tickk);
	whiteview2.add(whitelabel2);
	whiteview2.add(whitelabel3);
	whiteview2.add(blue_category);
	whiteview2.add(drop_dwn1)
	whiteview2.add(whitelabel4);
	whiteview2.add(blue_categ);
	whiteview2.add(drop_dwn2);
	whiteview2.add(tick1);
	whiteview2.add(whitelabel5);
	whiteview2.add(tick2);
	whiteview2.add(whitelabel6);
	whiteview2.add(submt);
	row2.add(whiteview2);

	var row3 = Ti.UI.createTableViewRow({
		backgroundColor:'white'
	});
	var brownv=Ti.UI.createView({
		top:0,
		left:0,
		right:0,
		height:40,
		backgroundColor:'#D7CEB1',
    	backgroundGradient:{type:'linear', colors: [ { color: '#E3DCC3', offset: 0.0}, { color: '#E3DCC4', offset: 0.25 }, { color: '#E3DCC3', offset: 1.0 } ], startPoint:{x:0,y:0}, endPoint:{x:2,y:50},backFillStart:false},
	});

	var brownl=Ti.UI.createLabel({
		color: '#333',
  font: { fontSize:16 },
  text:' Nearby deals notificaitons',
  left:10,
  right:35,
  top:7,
  width: 'auto', height: 'auto'
	});
	
var ico=Ti.UI.createImageView({
	image:'/images/info_icon.png',
	right:4,
	height:30,
	wigth:30,
	
});
brownv.add(ico);

ico.addEventListener('click',function(){
	info_window('Nearby push notifications', "When you are near a favourite store you will be alerted to their best deals, so you can pop in and take advantage.. To get alerts from your favourite store , brand or company you need to FOLLOW them on HotQ8Deals. Please note that some companies might not have 'Nearby deal notification' enabled in their plans. You can enable or disable this option anytime.");
})
	
brownv.add(brownl);

row3.add(brownv);
	
	var whitev = Ti.UI.createView({
	backgroundcolor:'white',
	top:30,
	height:340,
	left:-5,
	right:'auto',
});
var whitel=Ti.UI.createLabel({
		color: '#333',
  font: { fontSize:14 },

  text:'Inform me about the deals from the companies i follow at Hot Q8 Deals,sending a push notification on my mobile if i am nearby to thier location (up to 500 metres)',
  left:55,
  top:30,
  right:10,
  width: 'auto', height: 'auto'
	});
	whitev.add(whitel);
	
	var db = Titanium.Database.open('hotq8deals');
	var ti = 1;
	var db_rows = db.execute('select * from login_data');
	if(db_rows.isValidRow()){
		ti = db_rows.fieldByName('nearby_notifications');
	}
	db_rows.close();
	db.close();
		
	var tic;
	if(ti){
		tic = Ti.UI.createButton({
			top:33,
			left:20,
			width:30,
			height:30,
			backgroundImage:"/images/tick_image.png"
		});	
	}else{
		tic = Ti.UI.createButton({
			top:33,
			left:20,
			width:30,
			height:30,
			backgroundImage:"/images/tick.png"
		});
	}
	
	whitev.add(tic);
	
	
	
	tic.addEventListener('click',function(){
		if(ti==0)
		{
			tic.backgroundImage= '/images/tick_image.png';
			ti=1;
		}
		else
		{
			ti=0;
			tic.backgroundImage='/images/tick.png';
		}	
	})
	
	
	
	var whitel2 = Ti.UI.createLabel({
	  color: '#333',
	  font: { fontSize:14 },
	  text:'I want to get push notifications about',
	  left:55,
	  bottom:200,
	  right:10,
	  width: 'auto', height: 'auto'
	});
	var whitel3 = Ti.UI.createLabel({
			color: '#1869AB',
  font: { fontSize:13 },

  text:'The most recent deal ',
  left:55,
  bottom:180,
  right:10,
  width: 'auto', height: 'auto'
	});
	
	
var opts = {
  options:['The Most Recent Deal','The Most Hottest Deal'],
};
var dialog3 = Ti.UI.createOptionDialog(opts)

whitel3.addEventListener('click',function(){
	//dialog3.show();
});	

dialog3.addEventListener('click',function(e){
	//alert(JSON.stringify(e.index));
});
	var w=pwidth/2
	submtt=Ti.UI.createButton({
		bottom:110,
		height:35,
		right:30,
		width:pwidth1/2,
		backgroundImage:'/images/submit_button.png'
	});
	submtt.addEventListener('click',function(){
		var db = Titanium.Database.open('hotq8deals');
		db.execute('update login_data set nearby_notifications=? where hot_user_id=?',ti,hot_user_id);
		db.close();
		if(ti){
			showMessageTimeout('Nearby Deals Notifications Are Now Activated');
		}else{
			showMessageTimeout('Nearby Deals Notifications Are Now DeActivated');
		}
	});
	
	submt.addEventListener('click',function(){
		if(Titanium.Platform.osname.indexOf('iphone')> -1){
			if(customActivity){
			customActivity.close();
			customActivity = null;
		}
			customActivity = customActivityIndicator();
		}else{
			activityIndicator.show();
		}
		
		var url= domainName + '/en/mobile/set_user_alerts.json?user_id='+hot_user_id;
		url += '&daily_hottest_deal_alert=' + my_hottest_alert;
		url += '&daily_send_email=' + my_send_mail_alert;
		url += '&group=' + my_group_alert; 
	    url += '&multiple=' + my_multiple_alert;
	    url += '&selected_company=' + alert_company; 
	    url += '&selected_category=' + alert_category;
		Ti.API.info(url)
		var get_alerts = Titanium.Network.createHTTPClient();	
		get_alerts.open('GET', url);
		get_alerts.timeout = 10000;
		get_alerts.send();
		get_alerts.onerror = function(){
		if(Titanium.Platform.osname.indexOf('iphone')> -1){
			customActivity.close();
		}else{
			activityIndicator.hide();
		}
			if(timeOutWin){
				timeOutWin.close();	
			}
			timeOutWin = showMessageTimeout('Connection Problem, Please try again');
		}
		get_alerts.onload = function()
		{	//alert("we are currently working on this feature....")
			var response = JSON.parse(this.responseText);
			if(response.status == "ok"){
				if(timeOutWin){
				timeOutWin.close();	
			}
			if(Titanium.Platform.osname.indexOf('iphone')> -1){
			customActivity.close();
		}else{
			activityIndicator.hide();
		}
			timeOutWin = showMessageTimeout("Alerts Subscription Saved Successfully");
			}
			//alert(this.responseText);
			//
			//alert(this.responseText)	
		}
	});
	whitev.add(whitel2);
	whitev.add(whitel3);
	whitev.add(submtt);
	row3.add(whitev);


			
	
rows.push(row1);
rows.push(row2);
rows.push(row3);
table.data=rows;
alert_view.add(table);

	if(my_hottest_alert){
		tick.backgroundImage = '/images/tick_image.png'
	}
	if(my_send_mail_alert){
		tickk.backgroundImage = '/images/tick_image.png'
	}
	if(my_group_alert){
		tick1.backgroundImage = '/images/tick_image.png'
	}
	if(my_multiple_alert){
		tick2.backgroundImage = '/images/tick_image.png'
	}											
											
											
	

										
											 	
alert_setting.addEventListener('click',function(){	
if(Titanium.Platform.osname.indexOf('iphone')> -1){
		if(customActivity){
			customActivity.close();
			customActivity = null;
		}
			customActivity = customActivityIndicator();
		}else{
			activityIndicator.show();
		}
		
		
  	
		profile.backgroundImage ='/images/green_tab.jpg';
		feedback.backgroundImage ='/images/green_tab.jpg';
		alert_setting.backgroundImage ='/images/green_tab_active.jpg';
	
		alert_setting.color='white';
		profile.color='#3E5F18';
		feedback.color='#3E5F18';




feedback_view.hide();
tbl.hide();

alert_view.show();


if(Titanium.Platform.osname.indexOf('iphone')> -1){
			customActivity.close();
		}else{
			activityIndicator.hide();
		}
});






//Alert view end// 

// Feedback View//

	 feedback_view=Ti.UI.createView({
		backgroundColor:'white',
		top:40,
		bottom:0,
		left:0,
		right:0
	});

var message = Ti.UI.createLabel({
	top:20,
	color: 'black',
  	font: { fontSize:15 },
  	text:"Thanks to veryone who's given us feedback on our app. Keep it coming and help us to make this app awsome.",
  	left:10,
  	right:10,
	
});

var line = Ti.UI.createLabel({
top:70,
color: '#82A954',
  font: { fontSize:15 },
  text:"_______________________________________________",
  left:0,
  width: pwidth1+pwidth, 
  // height: 'auto'
	
});

var comment = Ti.UI.createLabel({
	top:85,
	color: '#A7A7A7',
  	font: { fontSize:16 },
  	text:"COMMENTS",
  	left:15,
  	right:10,
  	width: 'auto',
    height:40
});


var textField = Ti.UI.createTextArea({
	borderColor :'#82A954',
	borderWidth:1,
  	color: '#336699',
  	top: 125, left: 10,
  	right:10,
  	height:100
});

var sub=Ti.UI.createButton({
	top:250,
	height:35,
	left:pwidth1/4,
	right:pwidth1/4,
	width:pwidth1/2,
	backgroundImage:'/images/submit_button.png'		
});

sub.addEventListener('click',function(e){
	var feedback = textField.getValue();
	
	var emailDialog = Titanium.UI.createEmailDialog();
	emailDialog.subject = "HotQ8Deals Mobile Feedback";
	emailDialog.toRecipients = ['tickets@hotq8deals.uservoice.com'];
	emailDialog.messageBody = feedback;
	
	emailDialog.open();
	
	return;
	
	
	
});



feedback_view.add(message); 
feedback_view.add(line);
feedback_view.add(comment);
feedback_view.add(textField);
feedback_view.add(sub);







feedback.addEventListener('click',function(){	
	if(Titanium.Platform.osname.indexOf('iphone')> -1){
		if(customActivity){
			customActivity.close();
			customActivity = null;
		}
			customActivity = customActivityIndicator();
		}else{
			activityIndicator.show();
		}
		
 
	
	 profile.backgroundImage ='/images/green_tab.jpg';
	 feedback.backgroundImage = '/images/green_tab_active.jpg';
  	 alert_setting.backgroundImage ='/images/green_tab.jpg';

	feedback.color='white';
	profile.color='#3E5F18';
	alert_setting.color='#3E5F18';

alert_view.hide();
tbl.hide();

	
 feedback_view.show();
 	
	

	
if(Titanium.Platform.osname.indexOf('iphone')> -1){
			customActivity.close();
		}else{
			activityIndicator.hide();
		}	
	
});




self.add(feedback_view);
feedback_view.hide();
self.add(alert_view);
alert_view.hide();
self.add(tbl);
// main.add(brownview);
self.add(headerview);


	return self;




};

module.exports = settings;