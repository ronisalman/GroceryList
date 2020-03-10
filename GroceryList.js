// Created by Roni Salman

const li=document.querySelectorAll("li");


function init(){
	createDelete();
}

//creating the delete button with delete ability 

function createDelete(){
	for(let i=0;i<li.length;i++){
		let btn=document.createElement("button");
		btn.innerHTML="Delete";
		//removing the item clicked
		btn.addEventListener("click",function(){
			btn.parentElement.style.display="none";
		});

		li[i].appendChild(btn);
	}
}



// Create a new list item when clicking on the "Add" button


init();