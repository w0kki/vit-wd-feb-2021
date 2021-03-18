var inputText = document.getElementById("itemDescription"),
  inputUPC = document.getElementById("upcCode"),
  inputAmount = document.getElementById("amount");

function resetForm() {
  document.getElementById("itemDescription").value = "";
  document.getElementById("upcCode").value = "";
  document.getElementById("amount").value = "";
}

var itemId = 1;

function addItem() {
  var newName = document.createElement("li");
  newName.innerText = inputText.value;
  newName.classList.add(`${itemId}`);
  var nameList = document.querySelector("#name");
  nameList.appendChild(newName);

  var newUPC = document.createElement("li");
  newUPC.innerText = inputUPC.value;
  newUPC.classList.add(`${itemId}`);
  var UPCList = document.querySelector("#UPC");
  UPCList.appendChild(newUPC);

  var newQuantity = document.createElement("li");
  newQuantity.innerHTML = `${inputAmount.value} <button id=${itemId} onclick=editItem(event)>Edit </button>`;
  newQuantity.classList.add(`${itemId}`);
  var quantityList = document.querySelector("#quantity");
  quantityList.appendChild(newQuantity);

  itemId++;

  resetForm();
}

var clickedItemId = null;

function editItem(e) {
  console.log(e.target);
  var listItems = document.getElementsByClassName(`${e.target.id}`);
  inputText.value = listItems[0].innerText;
  inputUPC.value = listItems[1].innerText;
  inputAmount.value = listItems[2].innerText.slice(" ")[0];
  clickedItemId = e.target.id;
}

function updateItem() {
  var listItems = document.getElementsByClassName(`${clickedItemId}`);
  listItems[0].innerText = inputText.value;
  listItems[1].innerText = inputUPC.value;
  listItems[2].innerHTML = `${inputAmount.value} <button id=${clickedItemId} onclick=editItem(event)>Edit </button>`;

  resetForm();
}

function deleteItem() {
  var listItems = document.getElementsByClassName(`${clickedItemId}`);
  listItems[0].innerText = "";
  listItems[1].innerText = "";
  listItems[2].innerHTML = "";

  resetForm();
}
