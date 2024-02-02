const inputButton = document.getElementById("InputBtn");
const inputField = document.getElementById("InputField");
const list = document.getElementById("taskList");
inputButton.addEventListener("click", append);


function loader() {
	
}
loader()

// let count=0
let count = localStorage.length;

// console.log(count);
function append() {
	count += 1;
	// console.log(count);

	let taskInput = inputField.value;
	let task={
		text: taskInput,
		completed: false
	}
	localStorage.setItem(count, JSON.stringify(task));
	inputField.value = "";
	
	const listItem = document.createElement("li");
	const textDiv=document.createElement("div");
	textDiv.classList.add("textDiv")
	const pText=document.createElement("p");
	pText.textContent=taskInput
	textDiv.appendChild(pText)

	listItem.appendChild(textDiv)
    addButton(listItem)
    
	list.appendChild(listItem);
}

function addButton(listItem){
    cmpButton=document.createElement("button")
    cmpButton.textContent="mark as completed"
    cmpButton.addEventListener("click", function(){completed(this)})
    listItem.appendChild(cmpButton)
}

function completed(cButton){
	const textDiv=cButton.previousElementSibling;
	let crossed=document.createElement("del");
	crossed.textContent=textDiv.children[0].textContent
	textDiv.removeChild(textDiv.children[0])
	textDiv.appendChild(crossed)
}	
