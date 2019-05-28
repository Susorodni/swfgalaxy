var dark = false;
function darkTheme(){
  if(dark == false){
    dark = true;
    document.body.style.background = "black"
    document.getElementByClass("box").style.borderColor = "4px solid white";
  } else {
    dark = false;
    document.body.style.background = "#a12712"
    document.getElementByClass("box").style.borderColor = "4px solid black";
  }
}
