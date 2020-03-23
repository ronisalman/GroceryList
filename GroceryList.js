// Created by Roni Salman

const ul=document.querySelector("ul");
let obj ={};


function init(){
	createDelete();
	crossOff();
	addItem();
}

//creating the delete button with delete ability 

function createDelete(){
	const li=document.querySelectorAll("li");
	for(let i=0;i<li.length;i++){
		let btn=document.createElement("button");
		btn.innerHTML="Delete";
		//removing the item clicked
		btn.addEventListener("click",function(){
			btn.parentElement.style.display="none";
		});

		//only add delete if there is no delete button already
		if(li[i].childNodes.length<=1){
			li[i].appendChild(btn);
		}
	}
}


//allowing to cross off completed items

function crossOff(){
	const li=document.querySelectorAll("li");
	console.log(obj);
	for(let i=0;i<li.length;i++){
		if(obj[i]!=="complete"){
			li[i].addEventListener("click",function(){
				li[i].classList.toggle("crossOff");
				obj[i]="complete";
			});	
		}
	}
}



// Create a new list item when clicking on the "Add" button

function addItem(){
	let input=document.querySelector("input").value;

	const newItem=document.createElement("li");
	newItem.innerHTML=input;

	//add to list if not empty
	if(newItem.innerHTML!=""){
		ul.appendChild(newItem);
	}

	document.querySelector("input").value="";
	

	createDelete();
	crossOff();
}



init();