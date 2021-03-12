console.log("JavaSript successfullly loaded");

// determine the event that triggers the task
// event: click the "add task" button
function addTask(){
    console.log ("the button has been clicked");
    // grab what the person typed
    var taskInput = document.getElementById ("taskInput");
    // grab the input.value
    console.log("The input value: ", taskInput.value);
    // store the value and display
    var whatUserTyped = taskInput.value;
    // create Element, change the innertext to the value
    // and apppend the new Element
    var newlyCreatedLi = document.createElement ("li");
    newlyCreatedLi.innerText = whatUserTyped;
    // ul and li
    var taskListElement = document.getElementById("taskList");
    taskListElement.appendChild(newlyCreatedLi);
}