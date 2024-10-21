// Varibles Definition
const navBar = document.querySelector("#navbar");
const requiredItems = document.querySelectorAll(".required");
const errorText = document.querySelector("#error");
const submitButton = document.querySelector("#submit-button");
// requiredItems.forEach(requiredCheck)

// Function Definition
function openHamburgerMenu() {
  navBar.classList.remove("-translate-y-full");
  navBar.classList.add("translate-y-0");
}

function closeHamburgerMenu() {
  navBar.classList.add("-translate-y-full");
  navBar.classList.remove("translate-y-0");
}


submitButton.addEventListener('click', function() {
    for (let i = 0; i < requiredItems.length; i++) {
        console.log("inside for");
        if (requiredItems[i].value == "") {
        //   console.log("inside if");
          requiredItems[i].nextElementSibling.innerHTML =
            "* Value must not be empty.";
          requiredItems[i].nextElementSibling.classList.remove("-translate-y-full");
          requiredItems[i].nextElementSibling.classList.add("-translate-y-0");
        } else {
        //   requiredItems[i].nextElementSibling.innerHTML = "";
          requiredItems[i].nextElementSibling.classList.add("-translate-y-full");
          requiredItems[i].nextElementSibling.classList.remove("-translate-y-0");
        }
      }
})



/*
function checkRequired(item, index) {
  console.log("inside function");
  for (let i = 0; i < requiredItems.length; i++) {
    console.log("inside for");
    if (requiredItems[i].value == "") {
    //   console.log("inside if");
      requiredItems[i].nextElementSibling.innerHTML =
        "* Value must not be empty.";
      requiredItems[i].nextElementSibling.classList.remove("-translate-y-full");
      requiredItems[i].nextElementSibling.classList.add("-translate-y-0");
    } else {
    //   requiredItems[i].nextElementSibling.innerHTML = "";
      requiredItems[i].nextElementSibling.classList.add("-translate-y-full");
      requiredItems[i].nextElementSibling.classList.remove("-translate-y-0");
    }
  }
}

function checkRequired2(item, index) {
  console.log("inside function");
  errorText.innerHTML = "";
  for (let i = 0; i < requiredItems.length; i++) {
    console.log("inside for");
    if (requiredItems[i].value == "") {
      console.log("inside if");
      errorText.innerHTML +=
        "* <b>" +
        requiredItems[i].previousElementSibling.innerText +
        "</b> must not be empty." +
        "</br>";
    } else {
      requiredItems[i].nextElementSibling.innerHTML = "";
    }
  }
}
*/