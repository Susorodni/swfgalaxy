function brassmonkeySwfObject(){swfobject=function(){function s(){if(!z){try{var d=f.getElementsByTagName("body")[0].appendChild(f.createElement("span"));d.parentNode.removeChild(d)}catch(i){return}z=true;for(var d=K.length,a=0;a<d;a++)K[a]()}}
function F(d){z?d():K[K.length]=d};

function G(d)
{
	if(typeof q.addEventListener!=m)
		q.addEventListener("load",d,false);
	else if(typeof f.addEventListener!=m)
		f.addEventListener("load",d,false);
	else if(typeof q.attachEvent!=m)
		a(q,"onload",d);
	else if(typeof q.onload=="function")
	{
		var i=q.onload;
		q.onload=function()
		{
			i();
			d();
		};
	}else{ 
		q.onload=d;
	}
};



function L(){var d=f.getElementsByTagName("body")[0],i=f.createElement(p);i.setAttribute("type",v);var a=d.appendChild(i);if(a){var l=0;(function(){if(typeof a.GetVariable!=m){var h=a.GetVariable("$version");if(h)h=h.split(" ")[1].split(","),g.pv=[parseInt(h[0],10),parseInt(h[1],10),parseInt(h[2],10)]}else if(l<10){l++;setTimeout(arguments.callee,10);return}d.removeChild(i);a=null;H()})()}else H()}
function H(){var d=t.length;if(d>0)for(var i=0;i<d;i++){var a=t[i].id,l=t[i].callbackFn,h={success:false,id:a};if(g.pv[0]>0){var f=n(a);if(f)if(b(t[i].swfVersion)&&!(g.wk&&g.wk<312)){if(c(a,true),l)h.success=true,h.ref=I(a),l(h)}else if(t[i].expressInstall&&C()){h={};h.data=t[i].expressInstall;h.width=f.getAttribute("width")||"0";h.height=f.getAttribute("height")||"0";if(f.getAttribute("class"))h.styleclass=f.getAttribute("class");if(f.getAttribute("align"))h.align=f.getAttribute("align");for(var R={},f=f.getElementsByTagName("param"),e=f.length,p=0;p<e;p++)f[p].getAttribute("name").toLowerCase()!="movie"&&(R[f[p].getAttribute("name")]=f[p].getAttribute("value"));y(h,R,a,l)}else A(f),l&&l(h)}else if(c(a,true),l){if((a=I(a))&&typeof a.SetVariable!=m)h.success=true,h.ref=a;l(h)}}}
function I(d){var i=null;if((d=n(d))&&d.nodeName=="OBJECT")typeof d.SetVariable!=m?i=d:(d=d.getElementsByTagName(p)[0])&&(i=d);return i}
function C(){return!M&&b("6.0.65")&&(g.win||g.mac)&&!(g.wk&&g.wk<312)}
function y(d,i,a,l){M=true;P=l||null;S={success:false,id:a};var h=n(a);if(h){h.nodeName=="OBJECT"?(J=D(h),N=null):(J=h,N=a);d.id=T;if(typeof d.width==m||!/%$/.test(d.width)&&parseInt(d.width,10)<310)d.width="310";if(typeof d.height==m||!/%$/.test(d.height)&&parseInt(d.height,10)<137)d.height="137";f.title=f.title.slice(0,47)+" - Flash Player Installation";l=g.ie&&g.win?"ActiveX":"PlugIn";l="MMredirectURL="+encodeURI(window.location).toString().replace(/&/g,"%26")+"&MMplayerType="+l+"&MMdoctitle="+f.title;typeof i.flashvars!=m?i.flashvars+="&"+l:i.flashvars=l;if(g.ie&&g.win&&h.readyState!=4)l=f.createElement("div"),a+="SWFObjectNew",l.setAttribute("id",a),h.parentNode.insertBefore(l,h),h.style.display="none",function(){h.readyState==4?h.parentNode.removeChild(h):setTimeout(arguments.callee,10)}();o(d,i,a)}}
function A(d){if(g.ie&&g.win&&d.readyState!=4){var a=f.createElement("div");d.parentNode.insertBefore(a,d);a.parentNode.replaceChild(D(d),a);d.style.display="none";(function(){d.readyState==4?d.parentNode.removeChild(d):setTimeout(arguments.callee,10)})()}else d.parentNode.replaceChild(D(d),d)}
function D(d){var a=f.createElement("div");if(g.win&&g.ie)a.innerHTML=d.innerHTML;else if(d=d.getElementsByTagName(p)[0])if(d=d.childNodes)for(var x=d.length,l=0;l<x;l++)!(d[l].nodeType==1&&d[l].nodeName=="PARAM")&&d[l].nodeType!=8&&a.appendChild(d[l].cloneNode(true));return a}
function o(d,a,x){var l,h=n(x);if(g.wk&&g.wk<312)return l;if(h){if(typeof d.id==m)d.id=x;if(g.ie&&g.win){var c="",b;for(b in d)if(d[b]!=Object.prototype[b])b.toLowerCase()=="data"?a.movie=d[b]:b.toLowerCase()=="styleclass"?c+=' class="'+d[b]+'"':b.toLowerCase()!="classid"&&(c+=" "+b+'="'+d[b]+'"');b="";for(var e in a)a[e]!=Object.prototype[e]&&(b+='<param name="'+e+'" value="'+a[e]+'" />');h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+c+">"+b+"</object>";O[O.length]=d.id;l=n(d.id)}else{e=f.createElement(p);e.setAttribute("type",v);for(var k in d)d[k]!=Object.prototype[k]&&(k.toLowerCase()=="styleclass"?e.setAttribute("class",d[k]):k.toLowerCase()!="classid"&&e.setAttribute(k,d[k]));for(c in a)a[c]!=Object.prototype[c]&&c.toLowerCase()!="movie"&&(d=e,b=c,k=a[c],x=f.createElement("param"),x.setAttribute("name",b),x.setAttribute("value",k),d.appendChild(x));h.parentNode.replaceChild(e,h);l=e}}return l}
function B(d){var a=n(d);if(a&&a.nodeName=="OBJECT")g.ie&&g.win?(a.style.display="none",function(){if(a.readyState==4){var b=n(d);if(b){for(var c in b)typeof b[c]=="function"&&(b[c]=null);b.parentNode.removeChild(b)}}else setTimeout(arguments.callee,10)}()):a.parentNode.removeChild(a)}
function n(d){var a=null;try{a=f.getElementById(d)}catch(b){}return a}
function a(a,i,b){a.attachEvent(i,b);E[E.length]=[a,i,b]}
function b(a){var i=g.pv,a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return i[0]>a[0]||i[0]==a[0]&&i[1]>a[1]||i[0]==a[0]&&i[1]==a[1]&&i[2]>=a[2]?true:false}
function e(a,i,b,c){if(!g.ie||!g.mac){var h=f.getElementsByTagName("head")[0];if(h){b=b&&typeof b=="string"?b:"screen";c&&(Q=r=null);if(!r||Q!=b)c=f.createElement("style"),c.setAttribute("type","text/css"),c.setAttribute("media",b),r=h.appendChild(c),g.ie&&g.win&&typeof f.styleSheets!=m&&f.styleSheets.length>0&&(r=f.styleSheets[f.styleSheets.length-1]),Q=b;g.ie&&g.win?r&&typeof r.addRule==p&&r.addRule(a,i):r&&typeof f.createTextNode!=m&&r.appendChild(f.createTextNode(a+" {"+i+"}"))}}}
function c(a,i){if(U){var b=i?"visible":"hidden";z&&n(a)?n(a).style.visibility=b:e("#"+a,"visibility:"+b)}}
function k(a){return/[\\\"<>\.;]/.exec(a)!=null&&typeof encodeURIComponent!=m?encodeURIComponent(a):a}var m="undefined",p="object",v="application/x-shockwave-flash",T="SWFObjectExprInst",q=window,f=document,u=navigator,V=false,K=[function(){V?L():H()}],t=[],O=[],E=[],J,N,P,S,z=false,M=false,r,Q,U=true,g=function(){var a=typeof f.getElementById!=m&&typeof f.getElementsByTagName!=m&&typeof f.createElement!=m,b=u.userAgent.toLowerCase(),c=u.platform.toLowerCase(),g=c?/win/.test(c):/win/.test(b),c=c?/mac/.test(c):/mac/.test(b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,h=!+"\u000b1",e=[0,0,0],k=null;if(typeof u.plugins!=m&&typeof u.plugins["Shockwave Flash"]==p){if((k=u.plugins["Shockwave Flash"].description)&&!(typeof u.mimeTypes!=m&&u.mimeTypes[v]&&!u.mimeTypes[v].enabledPlugin))V=true,h=false,k=k.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),e[0]=parseInt(k.replace(/^(.*)\..*$/,"$1"),10),e[1]=parseInt(k.replace(/^.*\.(.*)\s.*$/,"$1"),10),e[2]=/[a-zA-Z]/.test(k)?parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if(typeof q.ActiveXObject!=m)try{var o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
if(o&&(k=o.GetVariable("$version")))h=true,k=k.split(" ")[1].split(","),e=[parseInt(k[0],10),parseInt(k[1],10),parseInt(k[2],10)]}catch(n){}return{w3:a,pv:e,wk:b,ie:h,win:g,mac:c}}();(function(){g.w3&&((typeof f.readyState!=m&&f.readyState=="complete"||typeof f.readyState==m&&(f.getElementsByTagName("body")[0]||f.body))&&s(),z||(typeof f.addEventListener!=m&&f.addEventListener("DOMContentLoaded",s,false),g.ie&&g.win&&(f.attachEvent("onreadystatechange",function(){f.readyState=="complete"&&(f.detachEvent("onreadystatechange",
arguments.callee),s())}),q==top&&function(){if(!z){try{f.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}s()}}()),g.wk&&function(){z||(/loaded|complete/.test(f.readyState)?s():setTimeout(arguments.callee,0))}(),G(s)))})();(function(){g.ie&&g.win&&window.attachEvent("onunload",function(){for(var a=E.length,b=0;b<a;b++)E[b][0].detachEvent(E[b][1],E[b][2]);a=O.length;for(b=0;b<a;b++)B(O[b]);for(var c in g)g[c]=null;g=null;for(var e in swfobject)swfobject[e]=null;swfobject=
null})})();return{registerObject:function(a,b,e,f){if(g.w3&&a&&b){var h={};h.id=a;h.swfVersion=b;h.expressInstall=e;h.callbackFn=f;t[t.length]=h;c(a,false)}else f&&f({success:false,id:a})},getObjectById:function(a){if(g.w3)return I(a)},embedSWF:function(a,i,e,f,h,k,n,v,q,r){var s={success:false,id:i};g.w3&&!(g.wk&&g.wk<312)&&a&&i&&e&&f&&h?(c(i,false),F(function(){e+="";f+="";var g={};if(q&&typeof q===p)for(var w in q)g[w]=q[w];g.data=a;g.width=e;g.height=f;w={};if(v&&typeof v===p)for(var t in v)w[t]=
v[t];if(n&&typeof n===p)for(var u in n)typeof w.flashvars!=m?w.flashvars+="&"+u+"="+n[u]:w.flashvars=u+"="+n[u];if(b(h))t=o(g,w,i),g.id==i&&c(i,true),s.success=true,s.ref=t;else if(k&&C()){g.data=k;y(g,w,i,r);return}else c(i,true);r&&r(s)})):r&&r(s)},switchOffAutoHideShow:function(){U=false},ua:g,getFlashPlayerVersion:function(){return{major:g.pv[0],minor:g.pv[1],release:g.pv[2]}},hasFlashPlayerVersion:b,createSWF:function(a,b,c){if(g.w3)return o(a,b,c)},showExpressInstall:function(a,b,c,e){g.w3&&
C()&&y(a,b,c,e)},removeSWF:function(a){g.w3&&B(a)},createCSS:function(a,b,c,f){g.w3&&e(a,b,c,f)},addDomLoadEvent:F,addLoadEvent:G,getQueryParamValue:function(a){var b=f.location.search||f.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(a==null)return k(b);for(var b=b.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return k(b[c].substring(b[c].indexOf("=")+1))}return""},expressInstallCallback:function(){if(M){var a=n(T);if(a&&J){a.parentNode.replaceChild(J,a);if(N&&
(c(N,true),g.ie&&g.win))J.style.display="block";P&&P(S)}M=false}}}}()};

(function()
		{
	function s(a,b)
	{
		var e=[];
		bm["on"+a]=function(z){e.push(z);};
		bm["on"+a+"Internal"]=function(){
			if(b)
			{
				bm.log("on"+a+"(");
				for(var c=0;c<arguments.length;c++)
					bm.log("    "+JSON.stringify(arguments[c]));
				bm.log(")")
			}

			if(a=="NavigationString")
				if( (arguments[1]=="left"||
          arguments[1]=="right"||
          arguments[1]=="up"||
          arguments[1]=="down"||
          arguments[1]=="back"||
          arguments[1]=="activate")&&
          perDeviceAttributes[arguments[0]]!==undefined&&
          !perDeviceAttributes[arguments[0]].hackForOldNavEventsEnabled ){
          
					for(var k=arguments[1],c=0;c<e.length;c++)
					{
						arguments[1]=k+"Down";
						try{
							e[c].apply(bm,arguments)
							}catch(m)
							{
								//console.log("UnhandledException ("+m+") in "+bmHooks[j]+" Callback")
							}
							arguments[1]=k+"Clicked";
							
							
							try{
								e[c].apply(bm,arguments)}catch(p){
								  //console.log("UnhandledException ("+p+") in "+bmHooks[j]+" Callback")
                }
					}
					arguments[1]=k+"Up";
				}
				else{
				  // TODO: Remove this if wrapper. Made it to do with the pubnub hack/test
				  if(perDeviceAttributes[arguments[0]]!==undefined){
				    perDeviceAttributes[arguments[0]].hackForOldNavEventsEnabled = true;
				  }
				}
			
			for(c=0;c<e.length;c++)
			{	
				try{
					//console.log("apply? "+a);
					e[c].apply(bm,arguments);
				}
				catch(z){
					//console.log("UnhandledException ("+z+") in "+bmHooks[j]+" Callback");
					};
			};
			
		};
	}
	
	function F()
	{
		function a(a)
		{
			var b=document.createElement("div");
			b.id="brassmonkey-wrapper"+Math.floor(Math.random()*281474943156225).toString(16);
			document.body.appendChild(b);			
			//b.style="position: fixed; width: 8px; height: 8px; bottom: 0px; left: 0px; overflow-x: hidden; overflow-y: hidden;";
			b.style.zIndex=1E4;b.style.position="fixed";b.style.width="8px";b.style.height="8px";b.style.left="0px";b.style.bottom="0px";
			b.style.overflowX="hidden";b.style.overflowY="hidden";
			var c=document.createElement("div");c.id="brassmonkey-wrapper"+Math.floor(Math.random()*281474943156225).toString(16);
			b.appendChild(c);
			b=bm.options.name;
			
			var bmAppId=bm.options.bmAppId!==void 0?bm.options.bmAppId:"";
			
			var bmMaxPlayers=bm.options.bmMaxPlayers!==void 0?bm.options.bmMaxPlayers:96;

			if(bm.options.design !== void 0)
			{	
				a=typeof bm.options.design=="string"?bm.options.design:	encodeURIComponent(H(bm.options.design,a));
				a={bmAppId:bmAppId,bmMaxPlayers:bmMaxPlayers, bmDeviceName:b,wmode:"window",debug:"true",bmControllerXML:a};
			}
			else
			{
				a={bmAppId:bmAppId,bmMaxPlayers:bmMaxPlayers, bmDeviceName:b,wmode:"window",debug:"true"};
			}
			
			
			// Generate us a unique device ID.
    // If one has been supplied to us (By this being loaded from within an iFrame on the website)
    // then use that one instead.
      // Are we embedded on the portal?
    if( bm.wereParams&&
        bm.getParams['appId']!==undefined&&
        bm.getParams['portalId']!==undefined){
        
      a.bmDeviceId = bm.getParams['appId'];
      a.bmPortalId = bm.getParams['portalId'];
        
    } else {  // Or are we standalone
      // If so generate our own random app/device ID
      //flashvars.bmDeviceId = "8f74e835162d";
      //flashvars.bmDeviceId = "8f74e835162d";
      a.bmDeviceId = Math.floor(Math.random()*16777215*16777215).toString(16);
    }
    
    bm.deviceId = a.bmDeviceId;
			
			swfobject.embedSWF(
					bm.options.swfURL,c.id,"1","1","9.0.124","",a,
					{quality:"high",bgcolor:"#ffffff",allowScriptAccess:"always",allowFullScreen:"true",wmode:"window"},
					{id:"brassmonkey",name:"Play Brass Monkey",align:"middle",style:"float:left;z-index:-1;position:absolute;margin-top:-1px;"},
					function(a)
					{
						a.success===false&&bm.options.error!==void 0?
								bm.options.error("noflash"):
									a.success===true&&bm.options.error!==void 0&&bm.options.success();
					}
			);
		
		}

		if(bm.options.design=== void 0 ||   typeof bm.options.design=="string")
			a([]);
		else if(bm.options.design.images=== void 0 || bm.options.design.images.length==0)
			a([]);
		else if(I()==-1)
			for(var b=0,e=Array(bm.options.design.images.length),c=0;c<bm.options.design.images.length;c++)
				(function(){
					var k=c,m=new Image;
					m.onload=function()	{
						var c;c=document.createElement("canvas");
						var n=c.getContext("2d");
						c.width=m.width;
						c.height=m.height;
						n.drawImage(m,0,0);
						c=c.toDataURL().replace("data:image/png;base64,","");
						e[k]=c;b++;
						b==bm.options.design.images.length&&a(e)
					};

					m.src=bm.options.design.images[c]
				})()

	}
	
	function G(a)
	{
		a/=bm.options.design.orientation=="portrait"?320:480;return a;
	}
	function L(a)
	{
		a/=bm.options.design.orientation=="portrait"?480:320;
		return a;
	}
				
	function H(a,b)
	{
		var e='<?xml version="1.0" encoding="utf-8"?>\n<BMApplicationScheme version="0.1" orientation="'+
		a.orientation+'" touchEnabled="'+(a.touchEnabled?"yes":"no")+'" accelerometerEnabled="'+(a.accelerometerEnabled?"yes":"no")+'">\n';
		if(b.length!=0)
		{
			e+="<Resources>\n";
			for(var c=0;c<b.length;c++)
				e+='<Resource id="'+(c+1)+'" type="image">\n',e+="<data><![CDATA["+b[c]+"]]\></data>\n",e+="</Resource>\n";
			e+="</Resources>\n";
			}else 
				e+="<Resources/>\n";
		
		if( a.layout!==void 0 &&  a.layout.length!=0)
		{
			e+="<Layout>\n";
			for(c=0;c<a.layout.length;c++)
			{
				var k=a.layout[c].handler;
				a.layout[c].type=="image"&&(k="nullHandler");
				e+='<DisplayObject type="'+	a.layout[c].type+'" top="'+L(a.layout[c].y)+'" left="'+G(a.layout[c].x)+'" width="'+G(a.layout[c].width)+'" height="'+L(a.layout[c].height)+'" functionHandler="'+k+'">\n';
				a.layout[c].type=="image"?e+='<Asset name="up" resourceRef="'+(a.layout[c].image+1)+'" />\n':(e+='<Asset name="up" resourceRef="'+(a.layout[c].imageUp+1)+'" />\n',e+='<Asset name="down" resourceRef="'+(a.layout[c].imageDown+1)+'" />\n');
				e+="</DisplayObject>\n"
			}
			e+="</Layout>\n";
		}
		else 
		{
			e+="<Layout/>\n";
		}
		e+="</BMApplicationScheme>";
		return e;
	}
				
function I()
{
	var a=-1;
	navigator.appName=="Microsoft Internet Explorer"&&/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)!=null&&(a=parseFloat(RegExp.$1));
	return a
}


bm={version:"0.4.0"};
bm.slotId=0;
bm.MODE_GAMEPAD=0;	
bm.MODE_KEYBOARD=1;		
bm.MODE_NAVIGATION=2;		
bm.MODE_WAIT=3;  	 
bm.CALLBACK_TEXT_ENTER = "textEnter";
bm.CALLBACK_PAUSE = "pause";
bm.CALLBACK_SCHEME_BUTTON = "schemeButton";
bm.CALLBACK_NAVIGATION = "navigation";
bm.CALLBACK_KEYBOARD = "keyboard";

window.swfobject===void 0&&brassmonkeySwfObject();






bm.init=function(a)
{
	bm.options=a;
	bm.options.logging=a.logging?a.logging:false;
	bm.options.swfURL=a.swfURL?a.swfURL:"http://s3.amazonaws.com/files.playbrassmonkey.com/sdks/js/v"+bm.version.replace(/\./g,"-")+"/brassmonkey.swf";
	
	//bm.options.design.images=a.design.images?a.design.images:[];
	//bm.options.design.layout=a.design.layout?a.design.layout:[]
	bm.getParams = {};
  bm.wereParams = false;
  document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
      return decodeURIComponent(s.split("+").join(" "));
    }
    bm.getParams[decode(arguments[1])] = decode(arguments[2]);
    bm.wereParams=true;
  });
  
};
for(var C="#ff6600,#ffcc00,#ff3399,#ff0066,#cc00ff,#999900,#9999cc,#00cc99,#287200,#00ccff,#003366,#99ff00,#cc0000,#80cd68,#6600ff".split(","),y="DeviceConnected,DeviceDisconnected,NavigationString,KeyString,Invocation,ShakeReceived,AccelReceived,Log,ShowSlot".split(","),A=0;A<y.length;A++)
	
	s(y[A],y[A]!= "AccelReceived"&& y[A]!="Log");

bm.log=function(a){	if(bm.options.logging)bm.onLogInternal(a)};

var D=false;

bm.showSlotInternal=function(a){bm.slotId=a; bm.onShowSlotInternal(C[(Math.max(1,a)-1)%C.length])};
var o=[];
bm.getControllerSlot=function(a){for(var b=0;b<o.length;b++)if(o[b]==a)return b};
bm.getControllerCount=function(){for(var a=0,b=0;b<o.length;b++)o[b]!==void 0&&a++;return a};
bm.getControllers=function(){for(var a=[],b=0;b<o.length;b++)o[b]!==void 0&&a.push(o[b]);return a};var B={};
bm.getDeviceName=function(a){return B[a]};
bm.onDeviceConnected(function(a){B[a.deviceId]=a.deviceName;for(var b=0;b<o.length;b++)if(o[b]===void 0){o[b]=a.deviceId;return}o.push(a.deviceId)});
bm.onDeviceDisconnected(function(a){delete B[a.deviceId];for(var b=0;b<o.length;b++)if(o[b]==a.deviceId){o[b]=void 0;break}bm.getControllerCount()});
bm.isDeviceConnected=function(a){return B[a.deviceId]==void 0?false:true};var n=[];
bm.onTouchesReceived=function(a){n.push(a)};
bm.onTouchesReceivedInternal=function(a){for(var b=0;b<a.touches.length;b++)for(var e=a.touches[b],c=0;c<n.length;c++)n[c](e,a.deviceId)};
bm.onSocketReady=function(){};
bm.setNavMode=function(a){	document.getElementById("brassmonkey")&&document.getElementById("brassmonkey").SetNavMode!==void 0&& document.getElementById("brassmonkey").SetNavMode(typeof a==="undefined"?"":a);};
bm.getBrassMonkey=function()
{
	return document.getElementById("brassmonkey");
};
bm.setRegistryVersion = function (maj,min) {
	bm.getBrassMonkey().setRegistryVersion(maj,min);
}

bm.start=function()
{
	document.getElementById("brassmonkey").start();
}

bm.loadDesign = function (uri,callback) {

  var xobj = new XMLHttpRequest();
  //xobj.overrideMimeType("application/json");
  xobj.open('GET', uri, true);
 
  xobj.onreadystatechange = function () {     
      if (xobj.readyState == 4) {         
         var jsonText = xobj.responseText;
         bm.getBrassMonkey().processDesign(jsonText,callback);
      }
  }
  
  xobj.send(null);
}

bm.setControlpadPage = function(deviceId,page) { 	
	bm.getBrassMonkey().setControlpadPage(deviceId,page);
}

bm.setControlText = function(deviceId,tElement,content,updateNow) { 	
	bm.getBrassMonkey().setControlText(deviceId,tElement,content,updateNow);
}

bm.processDesign = function(txt) { 	
	bm.getBrassMonkey().processDesign(txt);
}

bm.addResource=function( pName, uri,width,height,scaleSourceBol)
{
	bm.getBrassMonkey().addResource(pName, uri,width,height,scaleSourceBol);
};

bm.loadResources=function(callBack)
{
	bm.getBrassMonkey().loadResources(callBack);
};

bm.fl=[];
bm.onFlashLoadedInternal=function()
{
	if(bm.fl.length == 0)
	{	
		bm.start();
		return;
	}
	
	for(var i=0;i<bm.fl.length;i++)
	{
		bm.fl[i]();
	}
}

bm.onBrassMonkeyLoaded = function(func ){
	bm.fl.push(func);
	 
};

bm.da=[];

bm.onDeviceAvailable=function(a)
{
	bm.da.push(a);
};


bm.measurePing=function(deviceId){
  return bm.getBrassMonkey().measurePing(deviceId);
}

bm.onDeviceEchoInternal=function(rtt,device){
  //console.log("Round Trip Time ("+rtt+") Speed ("+Math.floor(rtt/2)+")");
}

bm.onDeviceAvailableInternal=function(a)
{
	//console.log('onDeviceAvailableInternal '+ a.deviceId);
	//portal defaults to nav. 
	a.controlMode=bm.MODE_GAMEPAD;
	
	for(var i=0;i<bm.da.length;i++)
	{
		a=bm.da[i](a);
	}
	
	return a;
};

bm.closeDevice=function(a)
{
	bm.getBrassMonkey().closeDevice(a);
};

bm.getRegistryVersion=function()
{
	return bm.getBrassMonkey().getRegistryVersion();
};

bm.getBrassMonkey=function()
{
	return document.getElementById("brassmonkey");
};

bm.updateControlPad=function(a,b,c)
{
	bm.getBrassMonkey().updateControlPad(a,b,c);
};



bm.setWaitMode=function(a)
{
	document.getElementById("brassmonkey").setWaitMode(a);
};

bm.getLanDevices=function(a)
{
	document.getElementById("brassmonkey").getLanDevices(a);
};

bm.getDevice=function(a)
{
	return  document.getElementById("brassmonkey").getDevice(a);
};
bm.setCallback=function(a,b,c)
{
	 document.getElementById("brassmonkey").setCallback(a,b,c);
};

bm.setCookie=function(a,b,c)
{
	 document.getElementById("brassmonkey").setCookie(a,b,c);
};
bm.getCookie=function(a,b,c)
{
	return document.getElementById("brassmonkey").getCookie(a,b,c);
};
bm.setDeviceAttribute=function(a,b,c)
{
	 document.getElementById("brassmonkey").setDeviceAttribute(a,b,c);
};

bm.getDeviceAttributes=function(a)
{
	return document.getElementById("brassmonkey").getDeviceAttributes(a);
};

bm.setKeyboardMode=function(a,b){if(document.getElementById("brassmonkey")&&document.getElementById("brassmonkey").SetKeyboardMode!==void 0){var e;document.getElementById("brassmonkey").SetKeyboardMode(typeof a==="undefined"?"":a,typeof b==="undefined"?"":b)}};
bm.setGamepadMode=function(a){document.getElementById("brassmonkey")&&document.getElementById("brassmonkey").SetGamepadMode!==void 0&&document.getElementById("brassmonkey").SetGamepadMode(typeof a==="undefined"?"":a)};
bm.setVisibility=function(a){document.getElementById("brassmonkey")&&document.getElementById("brassmonkey").SetVisibility!==void 0&&document.getElementById("brassmonkey").SetVisibility(a,true)};
bm.enableAccelerometer=function(a,b,e){setTimeout(function(){document.getElementById("brassmonkey").EnableAccelerometer(a,b,e)},2E3)};
bm.enableTouch=function(a,b,e){setTimeout(function(){document.getElementById("brassmonkey").EnableTouch(a,b,e)},2E3)};

//bm.getWidth=function(){return window.parent.passingObj!==void 0&&window.parent.passingObj.width!==void 0?window.parent.passingObj.width:-1};
//bm.getHeight=function(){return window.parent.passingObj!==void 0&&window.parent.passingObj.height!==void 0?window.parent.passingObj.height:-1};
//bm.getFullscreen=function(){return window.parent.passingObj!==void 0&&window.parent.passingObj.fullScreen!==void 0?window.parent.passingObj.fullScreen:false};

var pingCBInterval,
    perDeviceAttributes = {},
    doPings = false;

bm.doPingTrick = function(_doPings){
  // Early out if there is no change
  if(_doPings==doPings){
    return;
  }
  doPings = _doPings;
  
  if(doPings){
    pingCBInterval = setInterval(function(){
        bm.setNavMode();
    },16);
  } else {
    clearInterval(pingCBInterval);
  }
}

bm.onDeviceConnected(function(device){
  perDeviceAttributes[device.deviceId] = {
    hackForOldNavEventsEnabled: false
  };

/*
  if(doPings){
    pingCBIntervals[device.deviceId] = setInterval(function(){
        bm.setNavMode();
    },16);
  }
*/  
});
bm.onDeviceDisconnected(function(device){
  delete perDeviceAttributes[device.deviceId];

/*
  if(doPings){
    pingCBIntervals[device.deviceId] = setInterval(function(){
        bm.setNavMode();
    },16);
  }
*/
});


function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

// Clean Up
window.addEventListener?window.addEventListener("DOMContentLoaded",F,false):window.attachEvent("onload",F)

function onUnload(){
  if( getInternetExplorerVersion()==-1 &&
      typeof(bm.getBrassMonkey().unload) !== 'undefined'){
    bm.getBrassMonkey().unload();
  }
}
window.addEventListener?window.addEventListener("unload",onUnload,false):window.attachEvent("unload",onUnload)

})();