// Obtain the img element, and assign it to the image variable
let image = document.getElementById("pet")

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.getElementById("shrink-grow")

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.width == "500px") {
    image.style.width = "200px"
  }
  else {
    image.style.width = "500px"
  }
})