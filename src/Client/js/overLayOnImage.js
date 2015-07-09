var idNumber = 0;
var ele = document.getElementById('mod');
var image;
var element;
var inputOffset = 2000000000;
var spanOffset = 1000000000;
var delbutOffset = 3000000000;
var fontbutOffset = 4000000000;
var Count = 0;
var ImportedJsonData;

var Load = function(){
     image = document.createElement('div');
        image.id = 'image';
        document.body.appendChild(image);
     element = document.createElement('div');
        element.id = 'txt';
        document.body.appendChild(element);
 };
 
var JsonFile = function(){
var jsonUrl = document.getElementById('jsonURL');
ImportedJsonData = jsonUrl.value;
Func();
};

var Func = function(){
$.getJSON(ImportedJsonData, function(result){
$.each(result,function(i,field){
    if(i !== 'camFileURL0'){
  console.log(i);
  createOptions(i +  ': ' + field);
  }
  else {
createImage(field);
createBr(image);
createAForImage(field);
  }
});
});
};

var displayValue = function(value){
if (value === '-1'){
alert('no value');
}
else{
console.log(value);
$.getJSON(ImportedJsonData, function(result){
$.each(result,function(i,field){
if(i + ': ' + field === value){
console.log(i);
console.log(field);
createEverything(i + ': ' + field, i);
createBr(ele);
}
else{

}
});
});
}
};
var updateInformation = function(value){
getJSON(ImportedJsonData, function(result){
$.each(result,function(i,field){

if(i === value){
console.log(i);
console.log(field);
createSpan(i + ': ' + field, i);
createInput(i + ': ' + field, i);
createBr(ele);
}
else{

}
});
});
setTimeout(updateInformation(value),refreshInterval(value));
};
var refreshInterval = function(value){
var timer = Number(value) *1000;
};
var createOptions = function(key){
//displays all the keys from the json file.
    daySelect = document.getElementById('data');
    myOption = document.createElement("option");
    myOption.innerHTML = key;
    myOption.value = key;
    daySelect.appendChild(myOption);
    };

var addMoreText = function(){
//allows the user to add their own information to the website.
console.log('addmoretext');
createEverything('add new data', 'data');
createBr(ele);
};

var createEverything = function(value, clas){
           createSpan(value, clas);
           createInput(value, clas);
           changeFontButton(clas);
           createDelB(clas);
           createEditB(clas);
idNumber = idNumber + 1;
   };
//all functions that build elements on the webpage need to be saved in a new file. 
var createAForImage = function(imageURL){
    var a = document.createElement('a');
        a.href = imageURL;
        a.innerHTML = 'Live Video';
    var imageDiv = document.getElementById('image');
        imageDiv.appendChild(a);
        };
var createImage = function(imageURL, keyID){
    var image1 = document.createElement('img');
        image1.src = imageURL;
        image1.id = keyID;
        image1.style.width = '600px';
        image1.style.height = '400px';
    var imageDiv = document.getElementById('image');
        imageDiv.appendChild(image1);
        };
var createSpan = function(text, clas){
//create span node
	var span = document.createElement("span");
	var node = document.createTextNode(text);
		span.appendChild(node);
		span.className = clas;
		span.id = idNumber + spanOffset;		   
	console.log('created span  node');
		element.appendChild(span);
	       $(function(){
                   $('.' + clas).draggable();
                     });
   createBr(element);
};

var createInput = function(text, clas){
//create input node
	 var inp = document.createElement("input");
		inp.type = "text";
		inp.className = clas;
		inp.value =text;
		inp.id = idNumber + inputOffset;
	console.log('created input node');
	        ele.appendChild(inp);
	
};

var createEditB = function(clas){
// create edit button associated with input node
	 var but = document.createElement("button");
		but.className = clas;
		but.id = idNumber;
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

var createDelB = function(clas){
// create remove button associated with input node
	var rembut = document.createElement("button");
		rembut.className = clas;
		rembut.id = idNumber + delbutOffset;	
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

var changeFontButton = function(clas) {
// create a change font button
	var fontbut = document.createElement("button");
		fontbut.className = clas;
		fontbut.id = idNumber + fontbutOffset;	
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

