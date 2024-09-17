// change Text fuction
function changeText() {
  let getParagraph = document.querySelectorAll("p");
  getParagraph.forEach((p) => (p.innerHTML = "Hello World"));
}
// function to add new div with text
function addNewText() {
  let addText = document.querySelector("#addText");
  addText.innerHTML = "<div>New Item</div>";
}
// validate input form
function validateForm() {
  let errorMessage = document.getElementById("errorMessage");
  let formInput = document.querySelectorAll("input");
  formInput.forEach((input) => {
    if (input.value.trim() === "")
      errorMessage.textContent = "All Inputs resquired!";
  });
}

// function to change background color
function changeBackgroundColor() {
  let mainDiv = document.querySelector(".mainDiv");
  mainDiv.style.backgroundColor = "blue";
}
