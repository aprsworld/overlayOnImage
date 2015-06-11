var element = document.getElementById("txt");
var ele = document.getElementById("mod");
var count = 0;
var inputOffset = 2000000;
var spanOffset = 1000000;
var delbutOffset = 3000000;
var fontbutOffset = 4000000;
	
function Func(){
	createSpan("change this text by using the textfield");
	createInput('edit text here');
	createEditB();
    changeFontButton();
	createDelB();	
	//console.log(count);
        count = count + 1;
}
/**
 * createSpan
 *
 * @param text
 * @return {undefined}
 */
function createSpan(text){
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
}
function createInput(text){
//create input node
	 var inp = document.createElement("input");
		inp.type = "text";
		inp.className = "modify";
		inp.value =text;
		inp.id = count + inputOffset;
	console.log('created input node');
	        ele.appendChild(inp);
	
}
function createEditB(){
// create edit button associated with input node
	 var but = document.createElement("button");
		but.className = "modify";
		but.id = count;	
		but.innerHTML = "edit";
		but.addEventListener('click', function() {
        editSpan(but.id);
},false);
		ele.appendChild(but);
}
function editSpan(ButID){
        var idinp = String(Number(ButID) + inputOffset);
				console.log('update text');
			var idspan = String(Number(ButID) + spanOffset);
//				console.log(idpar);
			var spa = document.getElementById(idspan);
			var inp1 = document.getElementById(idinp);
            console.log(inp1);
				spa.innerHTML = inp1.value;
              save(ButID);
	
}
function createDelB(){
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
		createBr(ele);
}
function createBr(div){
//create a br element
	var bre = document.createElement("br");
		div.appendChild(bre);
	
}
function changeFontButton() {
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
}

function changeFontSize(FontbutId){
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
}
function save (editID){
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

localStorage.setItem('count',count);
localStorage.setItem(spanhtml,span.innerHTML);
//localStorage.setItem(spanSize,span.style.font.size);
//localStorage.setItem(spanLeft, span.style.left);
//localStorage.setItem(spanTop, span.style.top);

localStorage.setItem(inputValue, input.value);  
//localStorage.setItem(inputSize, input.style.font);
}

function del (delbutID){
var inputId = delbutID - spanOffset;
var spanId = delbutID - inputOffset;
var editId = delbutID - delbutOffset;
var fontbutID =Number(delbutID) + spanOffset;

var input = document.getElementById(inputId);
var span = document.getElementById(spanId);
var edit = document.getElementById(editId);
var font = document.getElementById(fontbutID);
var delet = document.getElementById(delbutID);

var spanLeft = spanId;
var spanhtml = spanId + 10000;
var spanSize = spanId + 20000;
var spanTop = spanId + 30000;

var inputValue = inputId;
localStorage.removeItem(spanhtml);
localStorage.removeItem(inputValue);

input.remove();
span.remove();
edit.remove();
font.remove();
delet.remove();
}

function load (){

}

