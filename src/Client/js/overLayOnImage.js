var element = document.getElementById("txt");
var ele = document.getElementById("mod");
var count = 0;
var inputOffset = 2000000;
var spanOffset = 1000000;
var delbutOffset = 3000000;
var fontbutOffset = 4000000;
var Count = 0;

var array = {  
   "packet_date":"2015-06-04 14:55:57",
   "sequenceNumber":"25009",
   "windSpeed_ms":"14.2",
   "windSpeed_mph":"31.8",
   "windGust_ms":"16.5",
   "windGust_mph":"36.9",
   "windDirection":"146",
   "temperature_c":"3.9",
   "tempe    rature_f":"39.0",
   "now":"2015-06-04 14:56:04",
   "camFileURL0":"http:\/\/cam.aprsworld.com\/A4405\/2015\/06\/04\/20150604_145524.jpg",
   "camDisplayName0":"Willow Mountain Camera",
   "camURLPrimary0":"http:\/\/    cam.aprsworld.com\/A4405\/latest.jpg",
   "displayName":"Willow Mountain",
   "stripLine":"http:\/\/data.asrichards.com\/data\/stripLinePlot.php?station_id=A4221&hours=24&start_date=2015-06-04+14%3A56%3A59"
   };
	
var Func = function(){
        createBr(ele);
        createEverything(lengt(array));
};

/**
 * createSpan
 *
 * @param text
 * @return {undefined}
 */
var createSpan = function(text){
//create span node
	var span = document.createElement("span");
	var node = document.createTextNode(text);
		span.appendChild(node);
		span.className = "texts";
		span.id = count + spanOffset;		   
	console.log('created span  node');
		element.appendChild(span);
	       $(function(){
                   $('.texts').draggable();
                     });
		createBr(element);		
};
var createInput = function(text){
//create input node
	 var inp = document.createElement("input");
		inp.type = "text";
		inp.className = "modify";
		inp.value =text;
		inp.id = count + inputOffset;
	console.log('created input node');
	        ele.appendChild(inp);
	
};
var createEditB = function(){
// create edit button associated with input node
	 var but = document.createElement("button");
		but.className = "modify";
		but.id = count;	
		but.innerHTML = "edit";
		but.addEventListener('click', function() {
        editSpan(but.id);
},false);
		ele.appendChild(but);
};
var editSpan = function(ButID){
        var idinp = String(Number(ButID) + inputOffset);
				console.log('update text');
			var idspan = String(Number(ButID) + spanOffset);
//				console.log(idpar);
			var spa = document.getElementById(idspan);
			var inp1 = document.getElementById(idinp);
            console.log(inp1);
				spa.innerHTML = inp1.value;
              save(ButID);
	
};
var createDelB = function(){
// create remove button associated with input node
	var rembut = document.createElement("button");
		rembut.className = "modify";
		rembut.id = count + delbutOffset;	
console.log('create rembut');
		rembut.innerHTML = "remove";
		rembut.addEventListener('click',function(){
      del(rembut.id); 
       }, false);
		ele.appendChild(rembut);	
};
var createBr = function(div){
//create a br element
	var bre = document.createElement("br");
		div.appendChild(bre);
	
};
var changeFontButton = function() {
// create a change font button
	var fontbut = document.createElement("button");
		fontbut.className = "modify";
		fontbut.id = count + fontbutOffset;	
console.log('create fontbut');
		fontbut.innerHTML = " edit font";
		fontbut.addEventListener('click', function(){
        changeFontSize(fontbut.id);
        }, false);
		ele.appendChild(fontbut);	
};

var changeFontSize = function(FontbutId){
//change font size for text 
	var selectFont = document.getElementById("fontSize");
		if(selectFont !== null){
	selectFontValue = selectFont.options[selectFont.selectedIndex].value;
console.log(selectFontValue);
        if (selectFontValue == '10') {
            document.getElementById(FontbutId-inputOffset).style.font = " 10px arial,serif";
            document.getElementById(FontbutId-delbutOffset).style.font = " 10px arial,serif";
        }
        else if (selectFontValue == 14) {
            document.getElementById(FontbutId-inputOffset).style.font = "14px arial,serif";
            document.getElementById(FontbutId-delbutOffset).style.font = "14px arial,serif";
        }
        else if (selectFontValue == '16') {
            document.getElementById(FontbutId-inputOffset).style.font = " 16px arial,serif";
            document.getElementById(FontbutId-delbutOffset).style.font = " 16px arial,serif";
        }
        else if (selectFontValue == 18) {
            document.getElementById(FontbutId-inputOffset).style.font = "18px arial,serif";
            document.getElementById(FontbutId-delbutOffset).style.font = "18px arial,serif";
        }
        else if (selectFontValue == '20') {
            document.getElementById(FontbutId-inputOffset).style.font = " 20px arial,serif";
            document.getElementById(FontbutId-delbutOffset).style.font = " 20px arial,serif";
        }
        else if (selectFontValue == 24) {
            document.getElementById(FontbutId-inputOffset).style.font = "24px arial,serif";
            document.getElementById(FontbutId-delbutOffset).style.font = "24px arial,serif";
        }
        else if (selectFontValue == '28') {
            document.getElementById(FontbutId-inputOffset).style.font = " 28px arial,serif";
            document.getElementById(FontbutId-delbutOffset).style.font = " 28px arial,serif";
        }
        else if (selectFontValue == 32) {
            document.getElementById(FontbutId-inputOffset).style.font = "32px arial,serif";
            document.getElementById(FontbutId-delbutOffset).style.font = "32px arial,serif";
        }
        else if (selectFontValue == '36') {
            document.getElementById(FontbutId-inputOffset).style.font = " 36px arial,serif";
            document.getElementById(FontbutId-delbutOffset).style.font = " 36px arial,serif";
        }
        else {
            document.getElementById(FontbutId-inputOffset).style.font = " 12px arial,serif";
            document.getElementById(FontbutId-delbutOffset).style.font = " 12px arial,serif";
        }
    }
};

var save = function(editID){
    var inputId =Number(editID) + inputOffset;
    var spanId =Number(editID) + spanOffset;
    var span = document.getElementById(spanId);
    var input = document.getElementById(inputId);

    var spanLeft = spanId;
    var spanhtml = spanId + 10000;
    var spanSize = spanId + 20000;
    var spanTop = spanId + 30000;

    var inputValue = inputId;
    var inputSize = inputId + 100000;

};

var del = function(delbutID){
    var inputId = delbutID - spanOffset;
    var spanId = delbutID - inputOffset;
    var editId = delbutID - delbutOffset;
    var fontbutID =Number(delbutID) + spanOffset;

    var input = document.getElementById(inputId);
    var span = document.getElementById(spanId);
    var edit = document.getElementById(editId);
    var font = document.getElementById(fontbutID);
    var delet = document.getElementById(delbutID);

    input.remove();
    span.remove();
    edit.remove();
    font.remove();
    delet.remove();
};

var load = function(){

};

var lengt = function(array){
   var numberOfData = Object.keys(array).length;
   console.log(numberOfData);
   return numberOfData;
   };
var createEverything = function(lengt){
    for (var i = 0; i < lengt; i++){
           var key = Object.keys(array)[Count];
           var value = array[key];
           console.log(value);
           createSpan(value);
           createInput(value);
           createEditB();
           changeFontButton();
           createDelB();
           createBr(document.getElementById('mod'));
           count = count + 1;
           Count = Count + 1;
      }
   };
