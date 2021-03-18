var inputText = document.getElementById("itemDescription"),
    items = document.querySelectorAll("#inventoryList"),
    tab = [],
    index;
var inputText = document.getElementById("itemDescription"),
    inputUPC = document.getElementById("upcCode"),
    inputAmount = document.getElementById("amount");
// get the selected li index using array
// populate array with li values
for(var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
    }
// get li index onclick
for(var i = 0; i < items.length; i++){
    items[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + " INDEX = " + index);
        // set the selected li value into input text
        // inputText.value = this.innerHTML;
        };
    }
// function refreshArray(){
//     // clear array
//     tab.length = 0;
//     items = document.querySelectorAll("#inventoryList");
//     // fill array
//     for(var i = 0; i < items.length; i++){
//         tab.push(items[i].innerHTML);
//         }
//     }
var itemId = 1;
function addItem(){
    var newName = document.createElement('li');
    newName.innerText = inputText.value;
    newName.classList.add(`${itemId}`);
    var nameList = document.querySelector('#name');
    nameList.appendChild(newName);

    var newUPC = document.createElement('li')
    newUPC.innerText = inputUPC.value;
    newUPC.classList.add(`${itemId}`);
    var UPCList = document.querySelector('#UPC');
    UPCList.appendChild(newUPC)

    var newQuantity = document.createElement('li')
    newQuantity.innerHTML = `${inputAmount.value} <button id=${itemId} onclick=editItem(event)>Edit </button>`
    newQuantity.classList.add(`${itemId}`);
    var quantityList = document.querySelector('#quantity');
    quantityList.appendChild(newQuantity)

    itemId++;

        // listItem = document.getElementById("inventoryList"),
        // textItem1 = document.createTextNode(inputText.value),
        // textItem2 = document.createTextNode(inputUPC.value),
        // textItem3 = document.createTextNode(inputAmount.value),
        // liItem1 = document.createElement("span"),
        // liItem2 = document.createElement("span"),
        // liItem3 = document.createElement("span"),
        // container = document.createElement("div");
        // liItem1.id = "inputText";
        // liItem2.id = "inputUPC";
        // liItem3.id = "inputAmount";
        // liItem1.appendChild(textItem1)
        // liItem2.appendChild(textItem2)
        // liItem3.appendChild(textItem3)
        // // liItem.appendChild(textItem);
        // container.appendChild(liItem1);
        // container.appendChild(liItem2);
        // container.appendChild(liItem3);
        // listItem.appendChild(container);
        // refreshArray();
        // // add event to the new LI
        // listItem.onclick = function(e){
        //     // index = tab.indexOf(container.innerText);
        //     console.log(e.target.children);
        //     // document.getElementById('b').firs
        //     inputText.value = e.target.children[0].innerText;
        //     inputUPC.value = e.target.children[1].innerText;
        //     inputAmount.value = e.target.children[2].innerText;
        //     console.log(e.target, "clicked")
        //     e.target.id = "clicked";
            // console.log(container.innerText + " INDEX = " + index);
            // set the selected li value into input text
            // inputText.value = container.innerText;
        // };
    }

    var clickedItemId = null;

    function editItem(e) {
        console.log(e.target)
        var listItems = document.getElementsByClassName(`${e.target.id}`);
        inputText.value = listItems[0].innerText;
        inputUPC.value = listItems[1].innerText;
        inputAmount.value = listItems[2].innerText.slice(' ')[0];
        clickedItemId = e.target.id;

    }
function updateItem(){
    var listItems = document.getElementsByClassName(`${clickedItemId}`);
    listItems[0].innerText = inputText.value;
    listItems[1].innerText = inputUPC.value;
    listItems[2].innerHTML = `${inputAmount.value} <button id=${clickedItemId} onclick=editItem(event)>Edit </button>`
    // var clickedContainer = document.getElementById("clicked");
    // // items = document.querySelectorAll("#inventoryList li");
    // clickedContainer.children[0].innerText = inputText.value;
    // clickedContainer.children[1].innerText = inputUPC.value;
    // clickedContainer.children[2].innerText = inputAmount.value
    // clickedContainer.id = "";
    // console.log(index)
    // edit the selected li using input text
    // items[index].innerHTML = inputText.value;
    // refreshArray();
    }
function deleteItem(){
    var listItems = document.getElementsByClassName(`${clickedItemId}`);
        // refreshArray();
        if(items.length > 0){
            items[index].parentNode.removeChild(items[index]);
            inputText.value = "";
            inputUPC.value = "";
            inputAmount.value = "";
            }
    }

    // function deleteItem(){
    //     var inputText = document.getElementById("itemDescription");
    //         // refreshArray();
    //         if(items.length > 0){
    //             items[index].parentNode.removeChild(items[index]);
    //             inputText.value = "";
    //             }
    //     }