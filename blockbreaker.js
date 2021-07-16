window.onload = (event) => {
    console.log('page is fully loaded');
    // setInterval(() => {
    //     console.log("page interval called");
    //     createBox();
    // }, 2000);
    //movableDiv();
    
  };


function createBox(){
    var parentBox = document.getElementById('boxParentId');
    var box = document.createElement("DIV");
    box.classList.add('box');
    parentBox.appendChild(box);
}

function movableDiv(){
    console.log("Move Start")
    var a = document.getElementById("tryMoveDiv");
    a.draggable = true;
    
    // .draggable( true
    //     // {
    //     //     containment : "#boxParentId",
    //     //     scroll : false
    //     // }
    // )
}

function showCoords(event){
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  console.time(coords)
  document.getElementById('coordinateText').innerText = coords;
  var box = document.getElementById('tryMoveDiv');
  var tx = x-20;
  var ty = y-64;
  console.log("TX : "+tx+" TYPE : "+(typeof tx));
  console.log("TY : "+ty+" TYPE : "+(typeof ty));
  var stx = tx.toString() + "px";
  var sty = ty.toString() + "px";
  console.log("stx typeof : "+(typeof stx));
  console.log("sty typeof : "+(typeof sty));
  box.style.setProperty('top', sty);
  box.style.setProperty('left', stx);
  console.log("BOX ",box)
}

function movex(event){
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    var box = document.getElementById('tryMoveDiv2');
    console.log("MOVEX : "+coords)
    console.log("Math sin : "+Math.sin(45));
    document.getElementById('coordinateText').innerText = coords;
    if(x < 420){
        box.style.setProperty('left' , (x-20)+"px")
    }
}

function moveDiv(){
    console.log("MOVE DIV")
    var box = document.getElementById('tryMoveDiv');
    var countX = 2;
    var countY = 2;
    while(true){
        //var cordY = 
        box.style.setProperty('transform', `translateX(${(100+(countX))}px) translateY(${(100+(countY))}px)`);
        //box.style.setProperty('transform', ``);
        console.time("countX : "+countX+" countY : "+countY)
        if(countX > 250 ){
            countX--;
            countY--;
            //break;
        }else{
            countX++;
            countY++;
        }
    }


}