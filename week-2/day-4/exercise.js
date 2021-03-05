function decrement() {
  // access the DOM element associated with the h1
  var h1Element = "CHANGE ME";
  var numberText = Number(h1Element.innerText);
  numberText++;
  h1Element.innerText = numberText;
}

function increment() {
  // write code here
}

// Done early? Try to add a blocker that doesnt go below 0 and above 10!
