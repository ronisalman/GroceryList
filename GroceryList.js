// Created by Roni Salman


function addingItem(){

	var item = document.querySelector("#itemInput").value;
	console.log(item);

	var ul = document.querySelector("#list");
	var li = document.createElement("li");

	li.appendChild(document.createElement("Button"));
	li.appendChild(document.createTextNode(item));
	li.appendChild(document.createElement("Button"));

	ul.appendChild(li);
}
