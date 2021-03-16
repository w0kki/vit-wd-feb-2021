var inputText = document.getElementById("itemDescription"),
    items = document.querySelectorAll("#inventoryList li"),
    tab = [], 
    index;
         
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
        inputText.value = this.innerHTML;
        };
    
    }

function refreshArray(){
    // clear array
    tab.length = 0;
    items = document.querySelectorAll("#inventoryList li");
    // fill array
    for(var i = 0; i < items.length; i++){
        tab.push(items[i].innerHTML);
        }
    }

function addItem(){
    
    var inputText = document.getElementById("itemDescription"),
        listItem = document.getElementById("inventoryList"),
        textItem = document.createTextNode(inputText.value),
        liItem = document.createElement("li");
        
        liItem.appendChild(textItem);
        listItem.appendChild(liItem);
        
        refreshArray();
        
        // add event to the new LI
        
        liItem.onclick = function(){
            index = tab.indexOf(liItem.innerHTML);
            console.log(liItem.innerHTML + " INDEX = " + index);
            // set the selected li value into input text
            inputText.value = liItem.innerHTML;
        };
        
    }
    
function editItem(){
    var inputText = document.getElementById("itemDescription"),
        items = document.querySelectorAll("#inventoryList li");

    // edit the selected li using input text
    items[index].innerHTML = inputText.value;
    refreshArray();
    }

function deleteItem(){
    var inputText = document.getElementById("itemDescription");
    
        refreshArray();
        if(items.length > 0){
            items[index].parentNode.removeChild(items[index]);
            inputText.value = "";
            }
    }