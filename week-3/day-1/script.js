function closeSplash() {
  document.querySelector("button").style.visibility = "hidden";
  document.querySelector("#splashPage").style.visibility = "hidden";
  document.querySelector("#tableOfContent").style.visibility = "visible";
}

// 1 - create an array with 2 differnt types
var sample = ["blue",5];
console.log(sample);
// 2 - create an object with your firstName, lastName, favoriteColor
var me = {
  firstName: "mike",
  lastName: "ritchie",
  favoriteColor: "blue",
};
console.log(me);
// 3 - update the favoriteColor
me.favoriteColor = "Red";
// 4 - console log the second number from the array with your favorite color
console.log(sample[1],me.favoriteColor);