const inputButton = document.getElementById("InputBtn");
const inputField = document.getElementById("InputField");
const list = document.getElementById("taskList");
inputButton.addEventListener("click", append);

function loader() {
	for (x of Object.keys(localStorage)) {
		liCreator(x);
	}
}
loader()

// let count=0

function liCreator(key) {
	const task = JSON.parse(localStorage.getItem(key));

	const listItem = document.createElement("li");
	const textDiv = document.createElement("div");
	textDiv.classList.add("textDiv");
	const pText = document.createElement("p");
	pText.textContent = task.text;
	if (task.completed == true) {
		pText.style.textDecoration = "line-through";
	}
	textDiv.appendChild(pText);

	listItem.appendChild(textDiv);
	addCmpButton(listItem,key);
	addDelButton(listItem,key)

	list.appendChild(listItem);
}

function append() {

	const taskInput = inputField.value;
	const task = {
		text: taskInput,
		completed: false,
	};
	localStorage.setItem(Date.now(), JSON.stringify(task));

	liCreator(Date.now());
	inputField.value = "";
}


function addDelButton(listItem, curr_count){
	const delButton=document.createElement("button");
	delButton.textContent="Delete";
	delButton.dataset.taskID= curr_count
	delButton.addEventListener("click", function(){
		delTask(this);
	});
	listItem.appendChild(delButton)
}

function addCmpButton(listItem,curr_count) {
	cmpButton = document.createElement("button");
	cmpButton.textContent = "mark as completed";
	cmpButton.dataset.taskID = curr_count;
	cmpButton.addEventListener("click", function () {
		completed(this);
	});
	listItem.appendChild(cmpButton);
}

function completed(cButton) {
	const textDiv = cButton.previousElementSibling;
	txt = textDiv.children[0];
	if(txt.style.textDecoration == "line-through"){
		txt.style.textDecoration = "none"
	}
	else{
	txt.style.textDecoration = "line-through";
	}
	let task = JSON.parse(localStorage.getItem(cButton.dataset.taskID));
	task.completed = true;
	localStorage.setItem(cButton.dataset.taskID, JSON.stringify(task));
}

function delTask(delButton){
	const delLi=delButton.parentElement;
	localStorage.removeItem(delButton.dataset.taskID)
	delLi.remove();
}
