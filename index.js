

var largeScale = 1.0;
var smallScale = 1.0;

function scaleUp(){
  console.log("does it work");
  const smallButton = document.getElementById("smallButton");
  largeScale = largeScale + 0.5;
  largeButton.style.transform = `scale(${largeScale})`; 
}


function scaleDown(){
    scaleUp()
    const smallButton = document.getElementById("smallButton");
  smallScale = smallScale - 0.5;
  smallButton.style.transform = `scale(${smallScale})`;
}

function teddy(){
    var imageElement = document.getElementById("gif1");
    imageElement.style.display= "block";
}