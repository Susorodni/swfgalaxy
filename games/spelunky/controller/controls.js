(function(){
  
  function createVerticalButtons( handler, steps, width, startHeight, endHeight, startX, startY ) {
    var stepWidth = parseInt( width / steps ),
      heightChange = parseInt((startHeight - endHeight) / steps),
      xChange = stepWidth,
      yChange = parseInt(heightChange * 0.5),
      x = startX,
      y = startY,
      w = stepWidth,
      h = startHeight,
      buttons = [];
    
    for ( var i = 0; i < steps; i++ ) {
      buttons.push( {
        x: x,
        y: y,
        width: w,
        height: h,
        type: "button",
        handler: handler,
        imageUp: 5,
        imageDown: 5
      } );
      
      x += xChange;
      y += yChange;
      h -= heightChange;
    }
    
    return buttons;
  }
  
  function createHorizontalButtons( handler, steps, height, startWidth, endWidth, startX, startY ) {
    var stepHeight = parseInt( height / steps ),
      widthChange = parseInt((startWidth - endWidth) / steps),
      xChange = parseInt(widthChange * 0.5),
      yChange = stepHeight,
      x = startX,
      y = startY,
      w = startWidth,
      h = stepHeight,
      buttons = [];
    
    for ( var i = 0; i < steps; i++ ) {
      buttons.push( {
        x: x,
        y: y,
        width: w,
        height: h,
        type: "button",
        handler: handler,
        imageUp: 5,
        imageDown: 5
      } );
      
      x += xChange;
      y += yChange;
      w -= widthChange;
    }
    
    return buttons;
  }

// Initialize Brass Monkey
bm.init({
  // The Name that will be displayed on phone when
  // trying to connect to the game to control it.
  name: "Spelunky",
  
  // This game is single player, set it's max players accordingly
  bmMaxPlayers:1,
  
  // Use this appID for now. We are building our developer portal
  // back end as we speak.
  bmAppId:"e55990800510ceede3f930d93ae2f41d",
  
  // Location of the brassmonkey.swf the SDK depends on.
  // Coming soon this dependency will be removed for platforms
  // like Mobile Safari that don't support flash.
  swfURL:"controller/brassmonkey.swf",
  
  // Describe the controller's design/layout
  design: {
    // Which orientation is your controller designed for
    orientation: "landscape",
    
    // Disable touch/accelerometer if you aren't using it
    // to improve network performance.
    touchEnabled: false,
    accelerometerEnabled: false,
    
    // List of images used for this controller
    images:[
      'controller/images/background.jpg',        //  0
      'controller/images/c-button.png',          //  1
      'controller/images/p-button.png',          //  2
      'controller/images/x-button.png',          //  3
      'controller/images/z-button.png',          //  4
      'controller/images/invisible-button.png',  //  5
      'controller/images/d-pad.png',             //  6
    ],
    
    // List of all the images/buttons in the controller layout
      // Attributes
      //  Images and Buttons
      //    type                    | 'image' or 'button'
      //    x,y,width, and height   | Position of elements (in pixels)
      //  Images only
      //    image                   | zero based index of the image to display
      //                            | from the 'images' list
      //  Buttons only
      
    layout: [
      //  Background
      {
        type:       "image",
        image:      0,
        x:          0,
        y:          0,
        width:      480,
        height:     320
      },
      //  D-pad
      {
        type:       "image",
        image:      6,
        x:          29,
        y:          65,
        width:      190,
        height:     190
      },
      //  Attack || X
      {
        type:      "button",
        handler:    "x",
        imageUp:    3,
        imageDown:  3,
        x:          253,
        y:          168,
        width:      87,
        height:     87
      },
      //  Jump || Z
      {
        type:      "button",
        handler:    "z",
        imageUp:    4,
        imageDown:  4,
        x:          340,
        y:          168,
        width:      87,
        height:     87
      },
      //  Skills || C
      {
        type:      "button",
        handler:    "c",
        imageUp:    1,
        imageDown:  1,
        x:          340,
        y:          86,
        width:      87,
        height:     87
      },
      //  Purchase || P
      {
        type:      "button",
        handler:    "p",
        imageUp:    2,
        imageDown:  2,
        x:          253,
        y:          86,
        width:      87,
        height:     87
      }
    ]
    .concat(
      //  handler,
      //  steps,
      //  width/height,
      //  startHeight/startWidth,
      //  endHeight/endWidth,
      //  startX,
      //  startY
      createVerticalButtons(    'left', 10, 120, 320,  20,   0,   0 ),
      createVerticalButtons(   'right', 10, 120,  50, 350, 120, 135 ),
      createHorizontalButtons(    'up', 10, 120, 218,  20,  12,   0 ),
      createHorizontalButtons(  'down', 10, 120,  47, 245,  93, 200 )
    )
  }
});

// Once the device becomes available set it GamePad Mode to
// show us our custom game controller
bm.onDeviceAvailable(function(device){  		
	device.controlMode=bm.MODE_GAMEPAD;
	return device;
});

var buttonCount = {
    left:   0,
    right:  0,
    up:     0,
    down:   0
  };

// Listen for button events 
bm.onInvocation(function(invoke, deviceId){
  // Is the button up or down now
  var isDown  = invoke.parameters[0].Value=="down";
  
  // Which button was it? ('left', 'right', or 'flip')
  var button  = invoke.methodName;
      
  var keyMap = {
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    z: 90,
    x: 88,
    c: 67,
    p: 80
  };
  
  if ( buttonCount[ button ] !== undefined ) {
    buttonCount[ button ]++;
  }
      
  // Button Down  
  if(isDown) {
    emulateKeyDown(keyMap[button]);
  } else {
    if ( (buttonCount[ button ] & 1) === 0 ) {
      // Button Up
      emulateKeyUp(keyMap[button]);
    }
  }
});


bm.onShowSlot(function(color){
  var canvas = document.getElementById( 'canvas' ),
    canvas2 = canvas.cloneNode( true ),
    context = canvas2.getContext( '2d' ),
    cwidth = canvas2.width,
    cheight = canvas2.height;
  
  canvas.parentNode.appendChild( canvas2 );
  canvas.parentNode.style.position = 'relative';
  
  canvas2.id = 'canvas2';
  canvas2.style.position = 'absolute';
  canvas2.style.top = '0px';
  canvas2.style.left = '0px';
  
  var img = new Image();
  
  img.onload = function onImageLoad() {
    var x = cwidth - 34,
      y = cheight - 34;
    
    context.fillStyle = color;
    roundedRect( context, x, y, 24, 24, 10 );
    
    context.drawImage( img, x, y );
  };
  
  img.src = 'controller/images/channel-color-24.png';
});

function roundedRect( ctx, x, y, width, height, radius ){
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x+radius,y);
  ctx.quadraticCurveTo(x,y,x,y+radius);
  ctx.fill();
}

function noop(){}

function emulateKeyDown(keyCode){
  window.event = {which:keyCode,target:"nottext",type:"keydown",preventDefault:noop}
  keyDownCB.call(window);
}

function emulateKeyUp(keyCode){
  window.event = {which:keyCode,target:"nottext",type:"keyup",preventDefault:noop};
  keyUpCB.call(window);
}

})();