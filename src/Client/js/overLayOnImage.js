/* Things that still need to be done
 *  update the image on a interval time
 *  update the span, input, and the buttons on an interval without changing their id's
 *  allow the user to only change the font of certain characters in the input fields
 *  get the refresh interval to work
 *  catch incorrect input data for the json textfield (incorrect meaning that it gives me 'get requests not found' or a 'cors error'
 *  */
var idNumber = 0;
var inputDiv = document.getElementById('input');
var imageDiv;
var spanDiv;
var Count = 0;
var ImportedJsonData;
var ImportedImageData;
var divCounter = 0;
var refreshInterval;

var Load = function(){
     imageDiv = document.createElement('div');
        imageDiv.id = 'image';
        document.body.appendChild(imageDiv);
     spanDiv = document.createElement('div');
        spanDiv.id = 'span';
        document.body.appendChild(spanDiv);
 };
 
var JsonFile = function(){
var jsonUrl = document.getElementById('jsonURL');
ImportedJsonData = jsonUrl.value;
Func();
};

var Func = function(){
$.getJSON(ImportedJsonData, function(result){
$.each(result,function(i,field){
  console.log(i);
  createOptions(i);
});
});
};

var DisplayImage = function(){
    var imageUrl = document.getElementById('imageURL');
        ImportedImageData = imageUrl.value; 
    createImage(ImportedImageData);
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
createEverything(field, i);
createBreak(inputDiv);
}
else{

}
});
});
}
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
console.log('add more text');
createEverything('add new data', 'data');
createBreak(inputDiv);
};

var createEverything = function(value, clas){
       createSpan(value, clas);
       createInput(value, clas);
       createEditButton(clas);
       createDeleteButton(clas);
       changeFontButton(clas);
       idNumber = idNumber + 5;
   };

//all functions that build elements on the webpage need to be saved in a new file. 

var createAForImage = function(imageURL){
    var newAttribute = document.createElement('a');
        newAttribute.href = imageURL;
        newAttribute.innerHTML = 'Live Video';
    var getImageDiv = document.getElementById('image');
        getImageDiv.appendChild(newAttribute);
        };
var createImage = function(imageURL){
    var newImage = document.createElement('img');
        newImage.src = imageURL;
        newImage.style.width = '600px';
        newImage.style.height = '400px';
    var getImageDiv = document.getElementById('image');
        getImageDiv.appendChild(newImage);
        };
var createSpan = function(text, clas){
//create span node
	var newSpan = document.createElement("span");
	var newNode = document.createTextNode(text);
		newSpan.appendChild(newNode);
        newSpan.className = clas;
		newSpan.id = idNumber;		   
	console.log('created span  node');
		spanDiv.appendChild(newSpan);
	       $(function(){
                   $('.' + clas).draggable();
                     });
   createBreak(spanDiv);
};

var createInput = function(text, clas){
//create input node
	 var newInput = document.createElement("input");
		newInput.type = "text";
		newInput.value =text;
        newInput.className = clas;
		newInput.id = idNumber + 1 ;
	console.log('created input node');
	        inputDiv.appendChild(newInput);
	
};

var createEditButton = function(clas){
// create edit button associated with input node
	 var newEditButton = document.createElement("button");
		newEditButton.id = idNumber + 2;
		newEditButton.innerHTML = "edit";
		newEditButton.addEventListener('click', function() {
        editSpan(newEditButton.id);
},false);
		inputDiv.appendChild(newEditButton);
};

var editSpan = function(EditButtonID){
//allow the span element to be edited from it's corresponding input field.
        var inputID = String(Number(EditButtonID) - 1 );
				console.log('update text');
			var spanID = String(Number(EditButtonID) - 2);
			var getSpan = document.getElementById(spanID);
			var getInput = document.getElementById(inputID);
            console.log(getInput);
				getSpan.innerHTML = getInput.value;
};

var createDeleteButton = function(clas){
// create remove button associated with input node
	var deleteButton = document.createElement("button");
		deleteButton.className = clas;
		deleteButton.id = idNumber  + 3;	
console.log('create remove button');
		deleteButton.innerHTML = "remove";
		deleteButton.addEventListener('click',function(){
      remove(deleteButton.id); 
       }, false);
		inputDiv.appendChild(deleteButton);	
};

var createBreak = function(div){
//create a br element
	var newBreak = document.createElement("br");
		div.appendChild(newBreak);
	
};

var changeFontButton = function(clas) {
// create a change font button
	var fontbutton = document.createElement("button");
		fontbutton.className = clas;
		fontbutton.id = idNumber + 4 ;	
console.log('create font button');
		fontbutton.innerHTML = " edit font";
		fontbutton.addEventListener('click', function(){
        changeFontSize(fontbutton.id);
        }, false);
		inputDiv.appendChild(fontbutton);	
};

var changeFontSize = function(FontButtonID){
//change font size for text 
    var SpanText = FontButtonID - 4;
    var InputValue = FontButtonID - 3;
	var selectFont = document.getElementById("fontSize");
		if(selectFont !== null){
	selectFontValue = selectFont.options[selectFont.selectedIndex].value;
console.log(selectFontValue);
        if (selectFontValue == '10') {
            document.getElementById(SpanText).style.font = " 10px arial,serif";
            document.getElementById(InputValue).style.font = " 10px arial,serif";
        }
        else if (selectFontValue == 14) {
            document.getElementById(SpanText).style.font = "14px arial,serif";
            document.getElementById(InputValue).style.font = "14px arial,serif";
        }
        else if (selectFontValue == '16') {
            document.getElementById(SpanText).style.font = " 16px arial,serif";
            document.getElementById(InputValue).style.font = " 16px arial,serif";
        }
        else if (selectFontValue == 18) {
            document.getElementById(SpanText).style.font = "18px arial,serif";
            document.getElementById(InputValue).style.font = "18px arial,serif";
        }
        else if (selectFontValue == '20') {
            document.getElementById(SpanText).style.font = " 20px arial,serif";
            document.getElementById(InputValue).style.font = " 20px arial,serif";
        }
        else if (selectFontValue == 24) {
            document.getElementById(SpanText).style.font = "24px arial,serif";
            document.getElementById(InputValue).style.font = "24px arial,serif";
        }
        else if (selectFontValue == '28') {
            document.getElementById(SpanText).style.font = " 28px arial,serif";
            document.getElementById(InputValue).style.font = " 28px arial,serif";
        }
        else if (selectFontValue == 32) {
            document.getElementById(SpanText).style.font = "32px arial,serif";
            document.getElementById(InputValue).style.font = "32px arial,serif";
        }
        else if (selectFontValue == '36') {
            document.getElementById(SpanText).style.font = " 36px arial,serif";
            document.getElementById(InputValue).style.font = " 36px arial,serif";
        }
        else {
            document.getElementById(SpanText).style.font = " 12px arial,serif";
            document.getElementById(InputValue).style.font = " 12px arial,serif";
        }
    }
};

var remove = function(deleteButtonID){
    console.log(deleteButtonID);
    var inputElementID = deleteButtonID - 2;
    var spanElementId = deleteButtonID - 3;
    var editElementID = deleteButtonID - 1;
    var fontButtonID =Number(deleteButtonID) + 1;

    var input = document.getElementById(inputElementID);
    var span = document.getElementById(spanElementId);
    var edit = document.getElementById(editElementID);
    var font = document.getElementById(fontButtonID);
    var delet = document.getElementById(deleteButtonID);
    
    input.remove();
    span.remove();
    edit.remove();
    font.remove();
    delet.remove();
};

// need to incorporate these functions with my code a little more. I took this code from a different js file. 

var updateInfo = function(){
var refreshJsonData = document.getElementById('timer');
var AllOfTheSpans = document.getElementbyId('span');
if(refreshJsonData.options[refreshJsonData.selectedIndex].value !== 'null'){
$.getJSON(ImportedJsonData, function(result){
$.each(result,function(i,field){

});
});
setTimeout(updateInfo, refreshInterval);
}
else{
console.log('counter should not continue to increase');
}
};
var timer = function(value){
if(value !== 'null'){
refreshInterval = Number(value) * 1000;
console.log(refreshInterval + 'ms');
}
else{
console.log('there is no refresh interval');
}
};
