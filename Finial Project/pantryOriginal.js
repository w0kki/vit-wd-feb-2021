// imput fields (Item desc, UPC, Amount) & gobal variables

var itemDesc = document.getElementById ("itemDescription"),
    // upc = document.getElementById ("upcCode"),
    // itemNum = document.getElementById ("amount"),
    items = document.querySelectorAll("#inventoryList li"),
    tab = [], 
    index;

function refreshArray(){
    // clear array
    tab.length = 0;
    items = document.querySelectorAll("#inventoryList li");
    // fill array
    for(var i = 0; i < items.length; i++){
        tab.push(items[i].innerHTML);
        }
    }

// button "add Item"
function addItem(){
    console.log ("Add Item has been clicked");
    // get the typed fields store in array
    var itemDesc = document.getElementById ("itemDescription"),
        // upc = document.getElementById ("upcCode"),
        // itemNum = document.getElementById ("amount"),
        // indexArray = [itemDesc.value, upc.value, itemNum.value],
        invItem = document.getElementById("inventoryList");
        liItem = document.createElement ("li");
 
    console.log ("Desc -", itemDesc.value); //"UPC -", upc.value, "# -", itemNum.value);
    liItem.innerText = itemDesc;  //indexArray;  
    invItem.appendChild(liItem);

    refreshArray();
 
    // add event to the new LI
    liItem.onclick = function(){
        index = tab.indexOf(liItem.innerHTML);
        console.log(liItem.innerHTML + " INDEX = " + index);
        // set the selected li value into input text
        indexArray.value = liItem.innerHTML;
    };

    // ul and li
    // var invItem = document.getElementById("inventoryList");
    // invItem.appendChild(liItem);

    // invItem.contentEditable = true;
}

// make the ul clickable and editable

// add edit function
function editItem(){

}

//add delete function
function deleteItem(){

}