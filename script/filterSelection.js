filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery_album_item");
  if (c == "all") {
    c = "";
    document.getElementById("gallery_album").style.flexDirection="column";
    document.getElementById("gallery_album").style.justifyContent="space-between";} else {
      document.getElementById("gallery_album").style.flexDirection="row";
      document.getElementById("gallery_album").style.justifyContent="center";
    } 
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("gallery_menu");
var btns = btnContainer.getElementsByClassName("gallery_menu_button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active_button");
    current[0].className = current[0].className.replace(" active_button", "");
    this.className += " active_button";
  });
}