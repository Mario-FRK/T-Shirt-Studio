var lado = "Front",color = 0,initPrice = 10,imgSF,imgSB,imgSR,imgSL;
var fCount = 0,bCount = 0,rCount = 0,lCount = 0;
var s = 0,l = 0,m = 0,xl = 0,dxl = 0,txl = 0,cxl = 0,cnxl = 0;
var xs = 0,sK = 0,lK = 0,mK = 0,xlK = 0;
var S = "",L = "",M = "",XL = "",DXL = "",TXL = "",CXL = "",CNXL = "";
var XS = "",SK = "",LK = "",MK = "",XLK = "";
var view = "Front";
var a,b;

var txtF = 0,txtB = 0,txtR = 0,txtL = 0;
var imgF = 0,imgB = 0,imgR = 0,imgL = 0;
var des1F = 0,des1B = 0;
var des2F = 0,des2B = 0;
$('#drawingArea-back').hide();
$('#drawingArea-right').hide();
$('#drawingArea-left').hide();


document.getElementById('shopCar').innerHTML = 0;
document.getElementById('dFront').innerHTML = "$" + 0;
document.getElementById('dBack').innerHTML = "$" + 0;
document.getElementById('dRight').innerHTML = "$" + 0;
document.getElementById('dLeft').innerHTML = "$" + 0;

var fronPrice = document.getElementById('frontImgPrice');
var backPrice = document.getElementById('backImgPrice');
var rightPrice = document.getElementById('rightImgPrice');
var leftPrice = document.getElementById('leftImgPrice');


var front = document.getElementById("t-shirt-div-front");
var back = document.getElementById("t-shirt-div-back");
var right = document.getElementById("t-shirt-div-right");
var left = document.getElementById("t-shirt-div-left");
var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
//setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
document.querySelector(".minus-btnm").setAttribute("disabled", "disabled");
document.querySelector(".minus-btnl").setAttribute("disabled", "disabled");
document.querySelector(".minus-btnx").setAttribute("disabled", "disabled");
document.querySelector(".minus-btn2").setAttribute("disabled", "disabled");
document.querySelector(".minus-btn3").setAttribute("disabled", "disabled");
document.querySelector(".minus-btn4").setAttribute("disabled", "disabled");
document.querySelector(".minus-btn5").setAttribute("disabled", "disabled");


//taking value to increment decrement input value
var valueCount = 0,valueCountm = 0,valueCountl = 0,valueCountx = 0,valueCount2 = 0,valueCount3 = 0,valueCount4 = 0,valueCount5 = 0;
var valueCountxs = 0,valueCountK = 0,valueCountmK = 0,valueCountlK = 0,valueCountxK = 0;
function plusBtnxs() {
  //getting value of input
  valueCountxs = document.getElementById("quantityxs").value;
  
  //input value increment by 1
  valueCountxs++;

  //setting increment input value
  document.getElementById("quantityxs").value = valueCountxs;
  Counter();
  Verify();
  if (valueCountxs > 0) {
      document.querySelector(".minus-btnxs").removeAttribute("disabled");
      document.querySelector(".minus-btnxs").classList.remove("disabled")
  }
}

function minusBtnxs() {
  //getting value of input
  valueCountxs = document.getElementById("quantityxs").value;

  //input value increment by 1
  valueCountxs--;

  //setting increment input value
  document.getElementById("quantityxs").value = valueCountxs
  Counter();
  Verify();
  if (valueCountxs == 0) {
      document.querySelector(".minus-btnxs").setAttribute("disabled", "disabled")
  }
}

function plusBtnK() {
  //getting value of input
  valueCountK = document.getElementById("quantityK").value;
  
  //input value increment by 1
  valueCountK++;

  //setting increment input value
  document.getElementById("quantityK").value = valueCountK;
  Counter();
  Verify();
  if (valueCountK > 0) {
      document.querySelector(".minus-btnK").removeAttribute("disabled");
      document.querySelector(".minus-btnK").classList.remove("disabled")
  }
}

function minusBtnK() {
  //getting value of input
  valueCountK = document.getElementById("quantityK").value;

  //input value increment by 1
  valueCountK--;

  //setting increment input value
  document.getElementById("quantityK").value = valueCountK
  Counter();
  Verify();
  if (valueCountK == 0) {
      document.querySelector(".minus-btnK").setAttribute("disabled", "disabled")
  }
}


function plusBtnmK() {
  //getting value of input
  valueCountmK = document.getElementById("quantitymK").value;
  
  //input value increment by 1
  valueCountmK++;

  //setting increment input value
  document.getElementById("quantitymK").value = valueCountmK;
  Counter();
  Verify();
  if (valueCountmK > 0) {
      document.querySelector(".minus-btnmK").removeAttribute("disabled");
      document.querySelector(".minus-btnmK").classList.remove("disabled")
  }
}

function minusBtnmK() {
  //getting value of input
  valueCountmK = document.getElementById("quantitymK").value;

  //input value increment by 1
  valueCountmK--;

  //setting increment input value
  document.getElementById("quantitymK").value = valueCountmK;
    Counter();
    Verify();
  if (valueCountmK == 0) {
      document.querySelector(".minus-btnmK").setAttribute("disabled", "disabled")
  }
}

function plusBtnlK() {
  //getting value of input
  valueCountlK = document.getElementById("quantitylK").value;
  
  //input value increment by 1
  valueCountlK++;

  //setting increment input value
  document.getElementById("quantitylK").value = valueCountlK;
  Counter();
  Verify();
  if (valueCountlK > 0) {
      document.querySelector(".minus-btnlK").removeAttribute("disabled");
      document.querySelector(".minus-btnlK").classList.remove("disabled")
  }
}

function minusBtnlK() {
  //getting value of input
  valueCountlK = document.getElementById("quantitylK").value;

  //input value increment by 1
  valueCountlK--;

  //setting increment input value
  document.getElementById("quantitylK").value = valueCountlK
  Counter();
  Verify();
  if (valueCountlK == 0) {
      document.querySelector(".minus-btnlK").setAttribute("disabled", "disabled")
  }
}

function plusBtnxK() {
  //getting value of input
  valueCountxK = document.getElementById("quantityx").value;
  
  //input value increment by 1
  valueCountxK++;

  //setting increment input value
  document.getElementById("quantityxK").value = valueCountxK;
  Counter();
  Verify();
  if (valueCountxK > 0) {
      document.querySelector(".minus-btnxK").removeAttribute("disabled");
      document.querySelector(".minus-btnxK").classList.remove("disabled")
  }
}

function minusBtnxK() {
  //getting value of input
  valueCountxK = document.getElementById("quantityxK").value;

  //input value increment by 1
  valueCountxK--;

  //setting increment input value
  document.getElementById("quantityxK").value = valueCountxK
  Counter();
  Verify();
  if (valueCountxK == 0) {
      document.querySelector(".minus-btnxK").setAttribute("disabled", "disabled")
  }
}



function plusBtn() {
  //getting value of input
  valueCount = document.getElementById("quantity").value;
  
  //input value increment by 1
  valueCount++;

  //setting increment input value
  document.getElementById("quantity").value = valueCount;
  Counter();
  Verify();
  if (valueCount > 0) {
      document.querySelector(".minus-btn").removeAttribute("disabled");
      document.querySelector(".minus-btn").classList.remove("disabled")
  }
}

function minusBtn() {
  //getting value of input
  valueCount = document.getElementById("quantity").value;

  //input value increment by 1
  valueCount--;

  //setting increment input value
  document.getElementById("quantity").value = valueCount
  Counter();
  Verify();
  if (valueCount == 0) {
      document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
  }
}


function plusBtnm() {
  //getting value of input
  valueCountm = document.getElementById("quantitym").value;
  
  //input value increment by 1
  valueCountm++;

  //setting increment input value
  document.getElementById("quantitym").value = valueCountm;
  Counter();
  Verify();
  if (valueCountm > 0) {
      document.querySelector(".minus-btnm").removeAttribute("disabled");
      document.querySelector(".minus-btnm").classList.remove("disabled")
  }
}

function minusBtnm() {
  //getting value of input
  valueCountm = document.getElementById("quantitym").value;

  //input value increment by 1
  valueCountm--;

  //setting increment input value
  document.getElementById("quantitym").value = valueCountm
    Counter();
    Verify();
  if (valueCountm == 0) {
      document.querySelector(".minus-btnm").setAttribute("disabled", "disabled")
  }
}

function plusBtnl() {
  //getting value of input
  valueCountl = document.getElementById("quantityl").value;
  
  //input value increment by 1
  valueCountl++;

  //setting increment input value
  document.getElementById("quantityl").value = valueCountl;
  Counter();
  Verify();
  if (valueCountl > 0) {
      document.querySelector(".minus-btnl").removeAttribute("disabled");
      document.querySelector(".minus-btnl").classList.remove("disabled")
  }
}

function minusBtnl() {
  //getting value of input
  valueCountl = document.getElementById("quantityl").value;

  //input value increment by 1
  valueCountl--;

  //setting increment input value
  document.getElementById("quantityl").value = valueCountl
  Counter();
  Verify();
  if (valueCountl == 0) {
      document.querySelector(".minus-btnl").setAttribute("disabled", "disabled")
  }
}

function plusBtnx() {
  //getting value of input
  valueCountx = document.getElementById("quantityx").value;
  
  //input value increment by 1
  valueCountx++;

  //setting increment input value
  document.getElementById("quantityx").value = valueCountx;
  Counter();
  Verify();
  if (valueCountx > 0) {
      document.querySelector(".minus-btnx").removeAttribute("disabled");
      document.querySelector(".minus-btnx").classList.remove("disabled")
  }
}

function minusBtnx() {
  //getting value of input
  valueCountx = document.getElementById("quantityx").value;

  //input value increment by 1
  valueCountx--;

  //setting increment input value
  document.getElementById("quantityx").value = valueCountx
  Counter();
  Verify();
  if (valueCountx == 0) {
      document.querySelector(".minus-btnx").setAttribute("disabled", "disabled")
  }
}

function plusBtn2() {
  //getting value of input
  valueCount2 = document.getElementById("quantity2").value;
  
  //input value increment by 1
  valueCount2++;

  //setting increment input value
  document.getElementById("quantity2").value = valueCount2;
  Counter();
  Verify();
  if (valueCount2 > 0) {
      document.querySelector(".minus-btn2").removeAttribute("disabled");
      document.querySelector(".minus-btn2").classList.remove("disabled");
  }
}

function minusBtn2() {
  //getting value of input
  valueCount2 = document.getElementById("quantity2").value;

  //input value increment by 1
  valueCount2--;

  //setting increment input value
  document.getElementById("quantity2").value = valueCount2
  Counter();
  Verify();
  if (valueCount2 == 0) {
      document.querySelector(".minus-btn2").setAttribute("disabled", "disabled")
  }
}

function plusBtn3() {
  //getting value of input
  valueCount3 = document.getElementById("quantity3").value;
  
  //input value increment by 1
  valueCount3++;

  //setting increment input value
  document.getElementById("quantity3").value = valueCount3;
  Counter();
  Verify();
  if (valueCount3 > 0) {
      document.querySelector(".minus-btn3").removeAttribute("disabled");
      document.querySelector(".minus-btn3").classList.remove("disabled");
  }
}

function minusBtn3() {
  //getting value of input
  valueCount3= document.getElementById("quantity3").value;

  //input value increment by 1
  valueCount3--;

  //setting increment input value
  document.getElementById("quantity3").value = valueCount3
  Counter();
  Verify();
  if (valueCount3 == 0) {
      document.querySelector(".minus-btn3").setAttribute("disabled", "disabled")
  }
}

function plusBtn4() {
  //getting value of input
  valueCount4 = document.getElementById("quantity4").value;
  
  //input value increment by 1
  valueCount4++;

  //setting increment input value
  document.getElementById("quantity4").value = valueCount4;
  Counter();
  Verify();
  if (valueCount4 > 0) {
      document.querySelector(".minus-btn4").removeAttribute("disabled");
      document.querySelector(".minus-btn4").classList.remove("disabled");
  }
}

function minusBtn4() {
  //getting value of input
  valueCount4 = document.getElementById("quantity4").value;

  //input value increment by 1
  valueCount4--;

  //setting increment input value
  document.getElementById("quantity4").value = valueCount4
  Counter();
  Verify();
  if (valueCount4 == 0) {
      document.querySelector(".minus-btn4").setAttribute("disabled", "disabled")
  }
}

function plusBtn5() {
  //getting value of input
  valueCount5 = document.getElementById("quantity5").value;
  
  //input value increment by 1
  valueCount5++;

  //setting increment input value
  document.getElementById("quantity5").value = valueCount5;
  Counter();
  Verify();
  if (valueCount5 > 0) {
      document.querySelector(".minus-btn5").removeAttribute("disabled");
      document.querySelector(".minus-btn5").classList.remove("disabled");
  }
}

function minusBtn5() {
  //getting value of input
  valueCount5 = document.getElementById("quantity5").value;

  //input value increment by 1
  valueCount5--;

  //setting increment input value
  document.getElementById("quantity5").value = valueCount5
  Counter();
  Verify();
  if (valueCount5 == 0) {
      document.querySelector(".minus-btn5").setAttribute("disabled", "disabled")
  }
}

  var img = document.createElement('img');
  img.src = deleteIcon;
  fabric.Object.prototype.transparentCorners = false;
  fabric.Object.prototype.cornerStyle = 'circle';

let canvas = new fabric.Canvas('tshirt-canvas', {
  hoverCursor: 'pointer',
  selection: false,
  selectionBorderColor:'blue',
});
canvas.on(
  {
  'object:added':		  	
    function () {
    }
  ,
  'selection:created':
  onObjectSelected
  ,
  'object:removed':		  
  function () {
    printDesign("Front");
  }
  ,
   'object:modified':function () {
    printDesign("Front");
   },
  'selection:cleared':onSelectedCleared
}
);
let canvasB = new fabric.Canvas('tshirt-canvas-back', {
  hoverCursor: 'pointer',
  selection: true,
  selectionBorderColor:'blue'
});
canvasB.on({
  'object:added': function(e) {		  
  },
  'object:removed': function(e) {		  	
    printDesign("Back");
  },
  'selection:created':
  onObjectSelected
  ,
   'object:modified':function () {
    printDesign("Back");
   },
  'selection:cleared':onSelectedCleared
});
let canvasR = new fabric.Canvas('tshirt-canvas-right', {
  hoverCursor: 'pointer',
  selection: true,
  selectionBorderColor:'blue'
});
canvasR.on({
  'object:added': function(e) {	
  },
  'object:removed': function(e) {		  	
    printDesign("Right");
  },
  'selection:created':
  onObjectSelected
  ,
   'object:modified':function () {
    printDesign("Right");
   },
  'selection:cleared':onSelectedCleared
});
let canvasL = new fabric.Canvas('tshirt-canvas-left', {
  hoverCursor: 'pointer',
  selection: true,
  selectionBorderColor:'blue'
});
canvasL.on({
  'object:added': function(e) {		 
  },
  'object:removed': function(e) {		  	
    printDesign("Left");
  },
  'selection:created':
  onObjectSelected
  ,
   'object:modified':function () {
    printDesign("Left");
   },
  'selection:cleared':onSelectedCleared
});
Turn();
Funciones(lado);
function Turn() {
  front.onclick = function () {
    $("#tshirt-backgroundpicture").attr("src","img/crew_front.png");
    $('#design').show();
    $('#drawingArea-back').hide();
    $('#drawingArea-right').hide();
    $('#drawingArea-left').hide();
    $('#drawingArea').show();
    lado = "Front";
    Funciones(lado);
  }
  back.onclick = function () {
    $("#tshirt-backgroundpicture").attr("src","img/crew_back.png");
    $('#design').show();
    $('#drawingArea-back').show();
    $('#drawingArea').hide();
    $('#drawingArea-right').hide();
    $('#drawingArea-left').hide();
    lado = "Back";
    Funciones(lado);
  }
  right.onclick = function () {
    $("#tshirt-backgroundpicture").attr("src","img/crew_right.png");
    $('#design').hide();
    $('#drawingArea-right').show();
    $('#drawingArea').hide();
    $('#drawingArea-left').hide();
    $('#drawingArea-back').hide();
    lado = "Right";
    Funciones(lado);
  }
  left.onclick = function () {
    $("#tshirt-backgroundpicture").attr("src","img/crew_left.png");
    $('#design').hide();
    $('#drawingArea-left').show();
    $('#drawingArea').hide();
    $('#drawingArea-back').hide();
    $('#drawingArea-right').hide();
    lado = "Left";
    Funciones(lado);
  }
}


var lista = document.getElementById('lista-colores');
    lista.addEventListener('click',function (e) {
      if(e.target.tagName === 'LI'){
        document.getElementById("tshirt-div").style.backgroundColor = e.target.getAttribute('value');
        document.getElementById("t-shirt-div-front").style.backgroundColor = e.target.getAttribute('value');
        document.getElementById("t-shirt-div-front-price").style.backgroundColor = e.target.getAttribute('value');
        document.getElementById("t-shirt-div-back").style.backgroundColor = e.target.getAttribute('value');
        document.getElementById("t-shirt-div-back-price").style.backgroundColor = e.target.getAttribute('value');
        document.getElementById("t-shirt-div-right").style.backgroundColor = e.target.getAttribute('value');
        document.getElementById("t-shirt-div-right-price").style.backgroundColor = e.target.getAttribute('value');
        document.getElementById("t-shirt-div-left").style.backgroundColor = e.target.getAttribute('value');
        document.getElementById("t-shirt-div-left-price").style.backgroundColor = e.target.getAttribute('value');
        printDesign(lado);
        
       /* if(e.target.getAttribute('value') == "#ffffff"){
            //priceC.innerHTML = "$" + 0;
            //priceC.value = 0;
            color = 0;
        }
        else{
            //priceC.innerHTML = "$" + 5;
            //priceC.value = 5;
            color = 5;
        }*/
      }
    });
function Funciones(lado) {
  console.log(lado);
  view = lado;
  if (lado == "Front") {

    $('.fuentes').click(function(){
    
        $('.menu-fuentes').toggleClass('show');
        
    });

  } else {
  }
}

function addImage(src,tipo) {
  updateTshirtImage(src,tipo);
  console.log(tipo);
}

function updateTshirtImage(imageURL,type){
  var imgLoad = new Image();
    imgLoad.src = imageURL;
    var tipo;
    if (type == 1) {
      tipo = "design1";
    }
    else{
      tipo = "design2";
    }
  if(view == "Front"){
    var img = new fabric.Image(imgLoad, { name: tipo });
     img.scaleToHeight(200);
      img.scaleToWidth(200);
      canvas.centerObject(img);
      canvas.add(img);
      canvas.renderAll();
      if (img.name == "design1") {
        des1F += 25;
        Alert("Design $25");
      }
      else{
        des2F += 35;
        Alert("Design 35$");
      }
      printDesign("Front");
  }else if(view == "Back"){
    var img = new fabric.Image(imgLoad, { name: tipo });
     img.scaleToHeight(200);
      img.scaleToWidth(200);
      canvasB.centerObject(img);
      canvasB.add(img);
      canvasB.renderAll();
      if (img.name == "design1") {
        des1B += 25;
        Alert("Design $25");
      }
      else{
        des2B += 35;
        Alert("Design $35");
      }
      printDesign("Back");
  }
  
}

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.0,
  y: -0.6,
  offsetY: 10,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 20
});

  //Add Text
  document.getElementById('add-text').onclick = function() {
    var text = $("#text-string").val();
      var textSample = new fabric.Text(text, {
        left: fabric.util.getRandomInt(0, 200),
        top: fabric.util.getRandomInt(0, 400),
        fontFamily: 'helvetica',
        width: 200,
        fontSize: 60,
        angle: 0,
        fill: '#000000',
        scaleX: 0.5,
        scaleY: 0.5,
        fontWeight: '',
        hasRotatingPoint:true
      });		    
      if($("#text-string").val() != ""){
        if(view == "Front"){
          canvas.centerObject(textSample)
          canvas.add(textSample);	
          canvas.item(canvas.item.length-1).hasRotatingPoint = true;
          txtF += 5
          Alert("Text");
          setTimeout(() => {
          printDesign("Front");
          }, 500);
        }
        else if(view == "Back"){
          canvasB.centerObject(textSample)
          canvasB.add(textSample);	
          canvasB.item(canvas.item.length-1).hasRotatingPoint = true;
          txtB += 5;
          Alert("Text");
          setTimeout(() => {
            printDesign("Back");
          }, 500);
        }
        else if(view == "Right"){
          canvasR.centerObject(textSample)
          canvasR.add(textSample);	
          canvasR.item(canvas.item.length-1).hasRotatingPoint = true;
          txtR += 5;
          Alert("Text");
          setTimeout(() => {
            printDesign("Right");
          }, 500);
        }
        else if(view == "Left"){
          canvasL.centerObject(textSample)
          canvasL.add(textSample);	
          canvasL.item(canvas.item.length-1).hasRotatingPoint = true;
          txtL += 5;
          Alert("Text");
          setTimeout(() => {
            printDesign("Left");
          }, 500);
        }
      }else{
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'You must enter text!'
        })
      }
    };
    $("#text-string").keyup(function(){	  		
      var activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.type === 'text') {
          activeObject.text = this.value;
          canvas.renderAll();
        }
    });

    //Color texto
    var lista_texto = document.getElementById('text-colores');
    lista_texto.addEventListener('click',function (e) {
      if(e.target.tagName === 'LI'){
        document.getElementById("color-preview-text-select").style.backgroundColor = e.target.getAttribute('value');
        document.getElementById("txtColor").value = e.target.getAttribute('value');
        document.getElementById("txtColor").textContent = e.target.getAttribute('title');
        document.getElementById("txtColor").style.color = e.target.getAttribute('value');

      
      }
    });

    function TextColor() {
      var val = document.getElementById("txtColor").value
      if (view == "Front"){
        var activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.type === 'text') {
          activeObject.set({fill: val});
          canvas.renderAll();
          printDesign("Front");
        }
        else{
          Swal.fire({
              type: 'info',
              title: 'Oops...',
              text: 'Select text field',
              footer: 'Warning!',
              timer: 2000,
              showConfirmButton: false
            })
        }
      }
      else if(view == "Back"){
        var activeObjectb = canvasB.getActiveObject();
        if (activeObjectb && activeObjectb.type === 'text') {
          activeObjectb.set({fill: val});
          canvasB.renderAll();
          printDesign("Back");
        }
        else{
          Swal.fire({
              type: 'info',
              title: 'Oops...',
              text: 'Select text field',
              footer: 'Warning!',
              timer: 2000,
              showConfirmButton: false
            })
        }
      }
      else if(view == "Right"){
        var activeObjectr = canvasR.getActiveObject();
        if (activeObjectr && activeObjectr.type === 'text') {
          activeObjectr.set({fill: val});
          canvasR.renderAll();
          printDesign("Right");
        }
        else{
          Swal.fire({
              type: 'info',
              title: 'Oops...',
              text: 'Select text field',
              footer: 'Warning!',
              timer: 2000,
              showConfirmButton: false
            })
        }
      }
      else if(view == "Left"){
        var activeObjectl = canvasL.getActiveObject();
        if (activeObjectl && activeObjectl.type === 'text') {
          activeObjectl.set({fill: val});
          canvasL.renderAll();
          printDesign("Left");
        }
        else{
          Swal.fire({
              type: 'info',
              title: 'Oops...',
              text: 'Select text field',
              footer: 'Warning!',
              timer: 2000,
              showConfirmButton: false
            })
        }
      }
		      
    }

    function setFont(font){
      if (view == "Front"){
      var  activeObject = canvas.getActiveObject();
	      if (activeObject && activeObject.type === 'text') {
	        activeObject.fontFamily = font;
          canvas.renderAll();
          printDesign("Front");
	      }
      }
      else if(view == "Back"){
        var activeObjectb = canvasB.getActiveObject();
	      if (activeObjectb && activeObjectb.type === 'text') {
	        activeObjectb.fontFamily = font;
          canvasB.renderAll();
          printDesign("Back");
	      }
      }
      else if(view == "Right"){
        var activeObjectr = canvasR.getActiveObject();
	      if (activeObjectr && activeObjectr.type === 'text') {
	        activeObjectr.fontFamily = font;
          canvasR.renderAll();
          printDesign("Right");
	      }
      }
      else if(view == "Left"){
        var activeObjectl = canvasL.getActiveObject();
	      if (activeObjectl && activeObjectl.type === 'text') {
	        activeObjectl.fontFamily = font;
          canvasL.renderAll();
          printDesign("Left");
	      }
      }
    } 



    function onObjectSelected(e) {	 
	    var selectedObject = e.target;
	    $("#text-string").val("");
	    selectedObject.hasRotatingPoint = true
	    if (selectedObject && selectedObject.type === 'text') {
        //display text editor	    	
        $("#texteditor").css('display', 'block');
	    }
	    else if (selectedObject && selectedObject.type === 'image'){
	    	//display image editor
	    	$("#texteditor").css('display', 'none');	
	    	$("#imageeditor").css('display', 'block');
	    }
	  }
	 function onSelectedCleared(e){
		 $("#texteditor").css('display', 'none');
		 $("#text-string").val("");
		 $("#imageeditor").css('display', 'none');
   }
   
   document.getElementById('tshirt-custompicture').addEventListener("change", function(e){
    var reader = new FileReader();
    
    reader.onload = function (event){
      var imgObj = new Image();
      imgObj.src = event.target.result;
      
      if(view == "Front"){
        // When the picture loads, create the image in Fabric.js
      imgObj.onload = function () {
        var img = new fabric.Image(imgObj, { name: 'Image' });
        img.scaleToHeight(200);
        img.scaleToWidth(200);
        canvas.centerObject(img);
        canvas.add(img);
        canvas.renderAll();
        imgF += 15;
        Alert("Image");
        printDesign("Front");
      };
      }
      else if(view == "Back"){
        // When the picture loads, create the image in Fabric.js
      imgObj.onload = function () {
        var img = new fabric.Image(imgObj, { name: 'Image' });
  
        img.scaleToHeight(200);
        img.scaleToWidth(200); 
        canvasB.centerObject(img);
        canvasB.add(img);
        canvasB.renderAll();
        imgB += 15;
        Alert("Image");
        printDesign("Back");
      };
      }
      else if(view == "Right"){
        imgObj.onload = function () {
          var img = new fabric.Image(imgObj, { name: 'Image' });
    
          img.scaleToHeight(200);
          img.scaleToWidth(200); 
          canvasR.centerObject(img);
          canvasR.add(img);
          canvasR.renderAll();
          imgR += 15;
          Alert("Image");
          printDesign("Right");
        };
      }
      else if(view == "Left"){
        imgObj.onload = function () {
          var img = new fabric.Image(imgObj, { name: 'Image' });
    
          img.scaleToHeight(200);
          img.scaleToWidth(200); 
          canvasL.centerObject(img);
          canvasL.add(img);
          canvasL.renderAll();
          imgL += 15;
          Alert("Image");
          printDesign("Left");
        };
      }
      
    };
  
    // If the user selected a picture, load it
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
  }, false);

  function deleteObject(eventData, targets) {
		var canvas = targets.canvas;
		    canvas.remove(targets);
        canvas.requestRenderAll();
        Counter();
        var selectedObject = targets;
        if (selectedObject.type === 'text') {
           viewDelete(canvas.getElement().id,"text");
           AlertDel("Text");
        }
        else if (selectedObject.type === 'image' && selectedObject.name == "Image"){
          viewDelete(canvas.getElement().id,"Imagen");
          AlertDel("Image");
        }
        else if (selectedObject.type === 'image' && selectedObject.name == "design1"){
          viewDelete(canvas.getElement().id,"design1");
          AlertDel("Design $25");
        }
        else if (selectedObject.type === 'image' && selectedObject.name == "design2"){
          viewDelete(canvas.getElement().id,"design2");
          AlertDel("Design $35");
        }
	}

  function viewDelete(lado,tipo){
    if (lado == "tshirt-canvas" && tipo == "text") {
      txtF -= 5;
      console.log("Restando" + txtF);
      setTimeout(() => {
        printDesign("Front");
        }, 500);
    }else if (lado == "tshirt-canvas-back" && tipo == "text") {
      txtB -= 5;
      console.log("Restando" + txtB);
      setTimeout(() => {
        printDesign("Back");
      }, 500);
    }else if (lado == "tshirt-canvas-right" && tipo == "text") {
      txtR -= 5;
      console.log("Restando" + txtR);
      setTimeout(() => {
        printDesign("Right");
      }, 500);
    }else if (lado == "tshirt-canvas-left" && tipo == "text") {
      txtL -= 5;
      console.log("Restando" + txtL);
      setTimeout(() => {
        printDesign("Left");
      }, 500);
    }

    //IMAGENES
    if (lado == "tshirt-canvas" && tipo == "Imagen") {
      imgF -= 15;
      setTimeout(() => {
        printDesign("Front");
        }, 500);
    }else if (lado == "tshirt-canvas-back" && tipo == "Imagen") {
      imgB -= 15;
      setTimeout(() => {
        printDesign("Back");
        }, 500);
    }else if (lado == "tshirt-canvas-right" && tipo == "Imagen") {
      imgR -= 15;
      setTimeout(() => {
        printDesign("Right");
        }, 500);
    }else if (lado == "tshirt-canvas-left" && tipo == "Imagen") {
      imgL -= 15;
      setTimeout(() => {
        printDesign("Left");
        }, 500);
    }

    //Diseño 25
    if (lado == "tshirt-canvas" && tipo == "design1") {
      des1F -= 25;
      setTimeout(() => {
        printDesign("Front");
        }, 500);
    }else if (lado == "tshirt-canvas-back" && tipo == "design1") {
      des1B -= 25;
      setTimeout(() => {
        printDesign("Back");
        }, 500);
    }

    //Diseño 35
    if (lado == "tshirt-canvas" && tipo == "design2") {
      des2F -= 35;
      setTimeout(() => {
        printDesign("Front");
        }, 500);
    }else if (lado == "tshirt-canvas-back" && tipo == "design2") {
      des2B -= 35;
      setTimeout(() => {
        printDesign("Back");
        }, 500);
    }
  }
  function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size/2, -size/2, size, size);
    ctx.restore();
  }
  
  function printDesign(lado) {
    if(lado == "Front"){
      console.log("Lado frontal" + canvas.size());
      var img = canvas.toDataURL("image/png");
      fronPrice.src = img;
      fCount = txtF + imgF + des1F + des2F;
      console.log("final" + fCount);
      Counter();
      canvas.discardActiveObject();
      canvas.requestRenderAll();
      setTimeout(() => {
        ScreenFront();
      }, 500);
    }
    else if (lado == "Back") {
      console.log("Lado Trasero" + canvasB.size());
      var img    = canvasB.toDataURL("image/png");
      backPrice.src = img;
      bCount = txtB + imgB + des1B + des2B;
      Counter();
      canvasB.discardActiveObject();
      canvasB.requestRenderAll();
      setTimeout(() => {
        ScreenBack();
      }, 500);
    }
    else if (lado == "Right") {
      console.log("Lado Derecho" + canvasR.size());
      var img    = canvasR.toDataURL("image/png");
      rightPrice.src = img;
      rCount = txtR + imgR;
      Counter();
      canvasR.discardActiveObject();
      canvasR.requestRenderAll();
      setTimeout(() => {
        ScreenRight();
      }, 500);
    }
    else if (lado == "Left") {
      console.log("Lado Izquierdo" + canvasL.size());
      var img    = canvasL.toDataURL("image/png");
      leftPrice.src = img;
      lCount = txtL + imgL;
      Counter();
      canvasL.discardActiveObject();
      canvasL.requestRenderAll();
      setTimeout(() => {
        ScreenLeft();
      }, 500);
    }
  }
  var sumu,aux;
  let tallas,cantidad,images;
  function Counter() {
  document.getElementById('dFront').innerHTML = "$" + fCount;
  document.getElementById('dBack').innerHTML = "$" + bCount;
  document.getElementById('dRight').innerHTML = "$" + rCount;
  document.getElementById('dLeft').innerHTML = "$" + lCount;
    aux = 0,sum = 0;
    sum = Number(fCount + bCount + rCount + lCount);
    if(color == 0){
    aux = initPrice + sum;
    document.getElementById('price').innerHTML = aux;
    }
    else if(color != 0){
    aux = Number(initPrice + color + sum);
    document.getElementById('price').innerHTML = aux;s
    }
    xs = valueCountxs * aux;
    sK = valueCountK * aux;
    lK = valueCountlK * aux;
    mK = valueCountmK * aux;
    xlK = valueCountxK * aux;
    s = valueCount * aux;
    l = Number(aux * valueCountl);
    m = Number(aux * valueCountm);
    xl = Number(aux * valueCountx);
    dxl = Number(aux * valueCount2);
    txl = Number(aux * valueCount3);
    cxl = Number(aux * valueCount4);
    cnxl = Number(aux * valueCount5);

    sumu =Number(xs + sK + lK + mK + xlK + s + l + m + xl + dxl + txl + cxl + cnxl);
    UptdateTotal(sumu);
    if (valueCountxs > 0) {
    XS = "XS-Kid";
    }
    if (valueCountK > 0) {
      SK = "S-Kid";
    }
    if (valueCountmK > 0) {
      MK = "M-Kid";
    }
    if (valueCountlK > 0) {
      LK = "L-Kid";
    }
    if (valueCountxK > 0) {
      XLK = "XL-Kid";
    }
    if (valueCount > 0) {
      S = "S";
    }
    if (valueCountm > 0) {
      M = "M";
    }
    if (valueCountl > 0) {
      L = "L";
    }
    if (valueCountx > 0) {
      XL = "XL";
    }
    if (valueCount2  > 0) {
      DXL = "2XL";
    }
    if (valueCount3 > 0) {
      TXL = "3XL";
    }
    if (valueCount4 > 0) {
      CXL = "4XL";
    }
    if (valueCount5 > 0) {
      CNXL = "5XL";
    } 
    tallas =[XS,SK,MK,LK,XLK,S,M,L,XL,DXL,TXL,CXL,CNXL];
    cantidad = [valueCountxs,valueCountK,valueCountmK,valueCountlK,valueCountxK,valueCount,valueCountm,valueCountl,valueCountx,valueCount2,valueCount3,valueCount4,valueCount5];
  }

  function UptdateTotal(total) {
    document.getElementById('shopCar').innerHTML = total;
  }
  function Verify() {
    if (valueCountxs!= 0 || valueCount != 0 || valueCountl != 0 || valueCountm != 0 || valueCountx != 0 || valueCount2 != 0 || valueCount3 != 0 || valueCount4 != 0 || valueCount5 != 0) {
      $( "#shopCar" ).prop( "disabled", false );
    }
    else{
      $( "#shopCar" ).prop( "disabled", true );
    }
  }

  function Alert(type) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      background: '#000000',
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: type + ' Added!'
    })
  }

  function AlertDel(type) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      background: '#000000',
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: type + ' Deleted!'
    })
  }
  function ScreenFront() {
    $node = document.querySelector('#tshirt-div');
                  html2canvas($node) // Llamar a html2canvas y pasarle el elemento
                  .then(canvas => {
                    // Cuando se resuelva la promesa traerá el canvas
                    imgSF = canvas.toDataURL("image/jpg");
                  });
                 
  }
  function ScreenBack() {
    $node = document.querySelector('#tshirt-div');
                  html2canvas($node) // Llamar a html2canvas y pasarle el elemento
                  .then(canvas => {
                    // Cuando se resuelva la promesa traerá el canvas
                    imgSB = canvas.toDataURL("image/jpg");
                  });
                  
  }
  function ScreenRight() {
    $node = document.querySelector('#tshirt-div');
                  html2canvas($node) // Llamar a html2canvas y pasarle el elemento
                  .then(canvas => {
                    // Cuando se resuelva la promesa traerá el canvas
                    imgSR = canvas.toDataURL("image/jpg");
                  });
                  
  }
  function ScreenLeft() {
    $node = document.querySelector('#tshirt-div');
                  html2canvas($node) // Llamar a html2canvas y pasarle el elemento
                  .then(canvas => {
                    // Cuando se resuelva la promesa traerá el canvas
                    imgSL = canvas.toDataURL("image/jpg");
                  });
                  
  }
  $('#shopCar').click(function () {
    Swal.fire({
      title: 'Are you sure?',
      text: "Add to shopping cart!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add!'
        }).then((result) => { 
          if (result.value) {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Design added to cart',
                showConfirmButton: false,
                timer: 1500
              })
            setTimeout(() => {
            Carrito();
            window.location = "it_cart.html";
            }, 2000);
            
          }
        })
  });

//AGREGAR AL CARRITO DE COMPRAS
  function obtenerProductosLocalStorage(){
    let productoLS;
    if(localStorage.getItem('t-shirt') === null){
        productoLS = [];
    }
    else{
        productoLS = JSON.parse(localStorage.getItem('t-shirt'));
    }
    return productoLS;
  }

  function Id() {
  return '_' + Math.random().toString(36).substr(2,9);
  }
  function Carrito() {
  images = [imgSF,imgSB,imgSR,imgSL];
  let Producto = [],Carrito;
  Producto.push(Id(),sumu,imgSF,imgSB,imgSR,imgSL,tallas,cantidad,aux);
  Carrito = obtenerProductosLocalStorage();
  Carrito.push(Producto);
  localStorage.setItem('t-shirt',JSON.stringify(Carrito));
  }