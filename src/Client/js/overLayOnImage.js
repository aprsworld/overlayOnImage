/* Things that still need to be done
 *  catch incorrect input data for the json textfield and image textfield.
 *  
 *  */
var idNumber = 0;
var inputDiv = document.getElementById('input');
var imageDiv = document.getElementById('image');
var spanDiv = document.getElementById('span');
var Count = 0;
var ImportedJsonData;
var ImportedImageData;
var divCounter = 0;
var refreshInterval;
var inputDivCount = 0;
var imageCount = 0;

var JsonFile = function(){
/*This function loads the json data from the external server and creates options for the user to use.
 * The way it works is it takes the JSON URL given to it by the user and imports that data into our webpage. Each key in the JSON file gets stored in a Options element.
 */
var jsonUrl = document.getElementById('jsonURL');
ImportedJsonData = jsonUrl.value;
$.getJSON(ImportedJsonData, function(result){
$.each(result,function(i,field){
  console.log(i);
  createOptions(i);
});
});
};
var DisplayImage = function(){
/*creates and displays an image onto the webpages from a given URL. 
 * First, I check to see if there is a image already loaded on the page. If there is, then I prohibit the user from adding another image. If there is not image, then I build an image given to me by the URL specified by the user. note: I still need to check for errors.
 * */

    if(imageCount === 0){
    var imageUrl = document.getElementById('imageURL');
       ImportedImageData = imageUrl.value; 
       createImage(ImportedImageData);
       imageCount = 1;
    }
    else {
        alert('You cannot add another image unless you remove the image you have up already');
        }
};
var displayValue = function(value){
//creates the input, span elements, and the buttons and assigns the innerHTML and values of the span and input elements to one of the json datas.
if (value === 'null'){
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
var updateInfo = function(){
//updates the information displayed on the webpage every couple seconds (either 10, 30, or 60 seconds)
var refreshJsonData = document.getElementById('timer');
if(refreshJsonData.options[refreshJsonData.selectedIndex].value !== 'null'){
if(inputDivCount > 0){
for (var input = 0; input < inputDivCount; input = input + 1){
    var input1 = input * 5 + 1;
    if(document.getElementById(input1) !== null){
    if(document.getElementById(input1).className !== 'UserCreated'){
    var inputNow = document.getElementById(input1);
    update(inputNow, input1);
    }
    else{
    }
    }
else{
console.log('element does not exist');
    }
    }
setTimeout(updateInfo, refreshInterval);
}
else{
console.log('There are no elements to update.');
}
}
else{
console.log('data will not update');
}
};
var createOptions = function(key){
//displays all the keys from the json file and stores each one of them in a Options element.
    daySelect = document.getElementById('data');
    myOption = document.createElement("option");
    myOption.innerHTML = key;
    myOption.value = key;
    daySelect.appendChild(myOption);
    };
var addMoreText = function(){
//allows the user to add their own information to the website. This function creates a span, input field and all of the buttons needed for the user.
console.log('add more text');
createEverything('add new data', 'UserCreated');
createBreak(inputDiv);
};
var createEverything = function(value, clas){
//builds the span, input, and buttons.
       createSpan(value, clas);
       createInput(value, clas);
       createEditButton(clas);
       createDeleteButton(clas);
       changeFontButton(clas);
       idNumber = idNumber + 5;
   };
var createAForImage = function(imageURL){
//create a element for an specific image. Note: This function may not be needed.
    var newAttribute = document.createElement('a');
        newAttribute.href = imageURL;
        newAttribute.innerHTML = 'Live Video';
    var getImageDiv = document.getElementById('image');
        getImageDiv.appendChild(newAttribute);
};
var createImage = function(imageURL){
//create image from given URL
    var newImage = $('<img />').attr('src', imageURL).attr('id', 'GeneratedImage').load(function(){
        $('#image').append(newImage);
        console.log(document.getElementById('GeneratedImage').complete);
        });
};
var removeImage = function(){
//deletes the image that is displayed on the screen. Currently does not work for null values.
   document.getElementById('GeneratedImage').remove();
    imageCount = 0;
};
var createSpan = function(text, clas){
//create span node and gives it draggable features
	var newSpan = document.createElement("span");
	var newNode = document.createTextNode(text);
		newSpan.appendChild(newNode);
        newSpan.className = clas;
		newSpan.id = idNumber;		   
	console.log('created span  node');
		spanDiv.appendChild(newSpan);
	       $(function(){
           if(Span){
                   $('.' + clas).draggable();
                  }
                     });
   createBreak(spanDiv);
};

var Span = function(){
//checks to see if a specific element is a span. Needed this because only spans should be draggable.
    var isSpan = idNumber%5;
    if(isSpan === 0){
        return true;
   }
   else{
   return false;
   }
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
            inputDivCount = inputDivCount + 1; 

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
// create a change fontsize button
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
        }
        else if (selectFontValue == 14) {
            document.getElementById(SpanText).style.font = "14px arial,serif";
        }
        else if (selectFontValue == '16') {
            document.getElementById(SpanText).style.font = " 16px arial,serif";
        }
        else if (selectFontValue == 18) {
            document.getElementById(SpanText).style.font = "18px arial,serif";
        }
        else if (selectFontValue == '20') {
            document.getElementById(SpanText).style.font = " 20px arial,serif";
        }
        else if (selectFontValue == 24) {
            document.getElementById(SpanText).style.font = "24px arial,serif";
        }
        else if (selectFontValue == '28') {
            document.getElementById(SpanText).style.font = " 28px arial,serif";
        }
        else if (selectFontValue == 32) {
            document.getElementById(SpanText).style.font = "32px arial,serif";
        }
        else if (selectFontValue == '36') {
            document.getElementById(SpanText).style.font = " 36px arial,serif";
        }
        else {
            document.getElementById(SpanText).style.font = " 12px arial,serif";
        }
    }
};

var remove = function(deleteButtonID){
//removes the span, input, edit button, remove button, and fontsize button associated with the deleteButtonID value.
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
var update = function(InputName, input1){
//updates to the most recent information for each element. 
$.getJSON(ImportedJsonData, function(result){
$.each(result, function(key, newValue){
    if(InputName.className === key){
    $(InputName).val(newValue);
    editSpan(input1 + 1); 
    }
    else{

    }
});
});
};
var timer = function(value){
//controls how often the webpage should poll the server where the json file resides.
if(value !== 'null'){
refreshInterval = Number(value) * 1000;
console.log(refreshInterval + 'ms');
}
else{
console.log('no refresh interval');
}
};
