// Created by Roni Salman  

const ul=document.querySelector("ul");

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

	for(let i=0;i<li.length;i++){
		if(!li[i].classList.contains("crossOff")){
			li[i].addEventListener("click",function(){
				li[i].classList.add("crossOff");
			});	
		}
	}
}



//adding a new item to list

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