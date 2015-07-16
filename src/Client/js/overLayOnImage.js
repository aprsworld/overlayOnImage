/* Things that still need to be done
 *  update the image on a interval time
 *  update the span, input, and the buttons on an interval without changing their id's
 *  allow the user to only change the font of certain characters in the input fields
 *  get the refresh interval to work
 *  catch incorrect input data for the json textfield (incorrect meaning that it gives me 'get requests not found' or a 'cors error'
 *  */
var idNumber = 0;
var ele = document.getElementById('input');
var image;
var element;
var Count = 0;
var ImportedJsonData;
var divCounter = 0;

var Load = function(){
     image = document.createElement('div');
        image.id = 'image';
        document.body.appendChild(image);
     element = document.createElement('div');
        element.id = 'span';
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
  createOptions(i);
  }
  else {
createImage(field, i);
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
if(value === i){
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
var updateInformation = function(){
replace();
};
var refreshInterval = function(){
//var timer = Number(value) * 1000;
updateInformation(ele);
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
           createEditB(clas);
           createDelB(clas);
           changeFontButton(clas);
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
		span.id = idNumber;		   
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
		inp.id = idNumber + 1 ;
	console.log('created input node');
	        ele.appendChild(inp);
	
};

var createEditB = function(clas){
// create edit button associated with input node
	 var but = document.createElement("button");
		but.className = clas;
		but.id = idNumber + 2;
		but.innerHTML = "edit";
		but.addEventListener('click', function() {
        editSpan(but.id);
},false);
		ele.appendChild(but);
};

var editSpan = function(ButID){
        var idinp = String(Number(ButID) - 1 );
				console.log('update text');
			var idspan = String(Number(ButID) - 2);
			var spa = document.getElementById(idspan);
			var inp1 = document.getElementById(idinp);
            console.log(inp1);
				spa.innerHTML = inp1.value;
};

var createDelB = function(clas){
// create remove button associated with input node
	var rembut = document.createElement("button");
		rembut.className = clas;
		rembut.id = idNumber  + 3;	
console.log('create remove button');
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
		fontbut.id = idNumber + 4 ;	
console.log('create font button');
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
            document.getElementById(FontbutId -4).style.font = " 10px arial,serif";
            document.getElementById(FontbutId -3).style.font = " 10px arial,serif";
        }
        else if (selectFontValue == 14) {
            document.getElementById(FontbutId -4).style.font = "14px arial,serif";
            document.getElementById(FontbutId -3).style.font = "14px arial,serif";
        }
        else if (selectFontValue == '16') {
            document.getElementById(FontbutId -4).style.font = " 16px arial,serif";
            document.getElementById(FontbutId -3).style.font = " 16px arial,serif";
        }
        else if (selectFontValue == 18) {
            document.getElementById(FontbutId -4).style.font = "18px arial,serif";
            document.getElementById(FontbutId -3).style.font = "18px arial,serif";
        }
        else if (selectFontValue == '20') {
            document.getElementById(FontbutId -4).style.font = " 20px arial,serif";
            document.getElementById(FontbutId -3).style.font = " 20px arial,serif";
        }
        else if (selectFontValue == 24) {
            document.getElementById(FontbutId -4).style.font = "24px arial,serif";
            document.getElementById(FontbutId -3).style.font = "24px arial,serif";
        }
        else if (selectFontValue == '28') {
            document.getElementById(FontbutId -4).style.font = " 28px arial,serif";
            document.getElementById(FontbutId -3).style.font = " 28px arial,serif";
        }
        else if (selectFontValue == 32) {
            document.getElementById(FontbutId -4).style.font = "32px arial,serif";
            document.getElementById(FontbutId -3).style.font = "32px arial,serif";
        }
        else if (selectFontValue == '36') {
            document.getElementById(FontbutId -4).style.font = " 36px arial,serif";
            document.getElementById(FontbutId -3).style.font = " 36px arial,serif";
        }
        else {
            document.getElementById(FontbutId -4).style.font = " 12px arial,serif";
            document.getElementById(FontbutId -3).style.font = " 12px arial,serif";
        }
    }
};

var del = function(delbutID){
    console.log(delbutID);
    var inputId = delbutID - 2;
    var spanId = delbutID - 3;
    var editId = delbutID - 1;
    var fontbutID =Number(delbutID) + 1;

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
var replace = function(){
/*first we will remove the image  */
$.getJSON(ImportedJsonData, function(result){
$.each(result,function(i, field){
    if(i !== 'camFileURL0'){
var Input = document.getElementsByClassName(i);
    Input.innerHTML = field;
    console.log('span and input updated');
}
    else{
var image = document.getElementById(i);
    image.src = field;
    console.log('image updated');
}
});
});
};

