// Created by Roni Salman

const ul=document.querySelector("ul");


function init(){
	createDelete();
	addItem();
}

//creating the delete button with delete ability 

function createDelete(){
	let li=document.querySelectorAll("li");
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
}


init();