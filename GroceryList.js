// Created by Roni Salman


function addingItem(){

	var item = document.querySelector("#itemInput").value;

	var ul = document.querySelector("#list");
	var li = document.createElement("li");

	var cross = document.createElement("Button");
	var remove = document.createElement("Button");

	cross.className = "cross";
	remove.className = "remove";

	li.appendChild(cross);
	li.appendChild(document.createTextNode(item));
	li.appendChild(remove);

//.textContent="Delete";
	ul.appendChild(li);

	document.querySelector(".remove").textContent="Delete";
}
