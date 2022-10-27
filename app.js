
let list = document.getElementById("todo-list"); // UL element (To do)
let addBtn = document.getElementById("todo-add-btn");
let addInput = document.getElementById("todo-text-area");

// CREATES TO DO
function createTodo() {
    let text = addInput.value; // gets input & checks
    if(text === "") {
        alert("To do can't be blank.");
        return;
    }
    // List element
    let li = document.createElement("li");

    // Elements for list
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let paragraph = document.createElement("p");
    paragraph.textContent = text; // Assigns user input to paragraph
    let remove = document.createElement("span");  // remove button

    // Attaches elements, list structure
    li.appendChild(checkbox);
    li.appendChild(paragraph);
    li.appendChild(remove);
    list.appendChild(li);

    addInput.value = ""; // sets text input back to blank
}
    

// Checks checkbox input state
function toggleComplete(inputElement) {
    if(inputElement.checked === false) {
        inputElement.classList.remove("complete");
    } else {
        inputElement.classList.add("complete");
    }
}        
    
function updateTodo() {
let editInput = document.getElementsByName("editInput")[0];
    if(!editInput) {
        console.log("Empty");
        return;
    }
    let newText = editInput;
    if(newText !== "") {
        let paragraph = editInput.parentElement.querySelector(".paragraph");
        paragraph.textContent = newText;
    }
    editInput.remove();
}


function removeTodo(removeElement) {
    removeElement.parentElement.remove();
}

    
    

    
// EVENT LISTENERS
list.addEventListener('click', function(event) {
    event.stopPropagation();
    switch(event.target.tagName) {
        // case "P":
        //     showEditInput(event.target);
        //     break;
            case "SPAN":
                removeTodo(event.target);
            break;
    }
});

// Checkbox state toggle
list.addEventListener('change', function(event) {
    if(event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        toggleComplete(event.target);
    }
});

list.addEventListener('keypress', function(event) {
    if(event.target.tagName === "INPUT" && event.target.type === "text" && event.key === "Enter") {
        updateTodo();
    }
});

// Add button
addBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    createTodo();
});

addInput.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.stopPropagation();
        createTodo();
    }
});

document.addEventListener('click', updateTodo);