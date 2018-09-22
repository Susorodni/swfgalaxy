(function(){

// Create Brass Monkey object
bm = {};

// Initialize API function.
// NOTE: Most initialization is actually done in initializeDOM
bm.init = function(options){
  bm.options = options;
}

// Wait till the DOM is ready then initialize everything
if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', initializeDOM, false);
} else {
  window.attachEvent('onload', initializeDOM);
}
function initializeDOM(){
  // Create a DOM element to hold the elements of the controller layout
  bm.dom = document.createElement('div');
  bm.dom.id="brassmonkey-wrapper"+Math.floor(Math.random()*16777215*16777215).toString(16);
  document.body.appendChild(bm.dom,document.body.firstChild);
  document.body.style.background = "red";
  
  // Set dimensions based on orientation of the Controller.
  var width = (bm.options.design.orientation=="portrait")?320:480,
      height = (bm.options.design.orientation=="portrait")?480:320;
      
  bm.dom.style.width = width+"px";;
  bm.dom.style.height = height+"px";
  bm.dom.style.overflow = "hidden";
  bm.dom.style.backgroundColor = "white";
  
  // Generate elements
  for(var i = 0; i<bm.options.design.layout.length; i++){
    var img = document.createElement('img'),
        elem = bm.options.design.layout[i],
        type = elem.type;
    if(type=="image"){
      img.src = bm.options.design.images[elem.image];
    } else if(type=="button"){
      //img.src = bm.options.design.images[elem.imageUp];
      img.src = "images/controller/debug-up.png";//bm.options.design.images[elem.imageUp];
    }
    img.style.position = "absolute";
    img.style.marginLeft = elem.x+"px";
    img.style.marginTop = elem.y+"px";
    img.style.width = elem.width+"px";
    img.style.height  = elem.height+"px";
    
    // Clip the elements to the controller dimensions
    var left=0,top=0,
        right=elem.width, bottom=elem.height;
    
    if(elem.x<0){
      left = -elem.x;
    }
    if(elem.y<0){
      top = -elem.y;
    }
    
    if(elem.x+elem.width>width){
      right -= (elem.x+elem.width)-width;
    }
    if(elem.y+elem.height>height){
      bottom -= (elem.y+elem.height)-height;
    }
    
    img.style.clip = 'rect('+top+'px '+right+'px '+bottom+'px '+left+'px)'
    
    bm.dom.appendChild(img);
  }
}


// No op version of most API functions
function noop(){}
bm.onDeviceAvailable = 
bm.onInvocation = 
bm.onShowSlot = 
noop;

})();