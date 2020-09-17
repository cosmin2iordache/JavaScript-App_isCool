document.title = "cosmin"
document.body.insertAdjacentHTML("afterbegin", "<h1>Hello Cosmin</h1>")


const input = document.querySelector("#input")
const textModified = document.querySelector("#text")
// input.value = "testing"

input.addEventListener("input", swapText)


function swapText(){
      if(input.value) {
      // textModified.innerHTML = `${input.value} is cool`
      // or
      textModified.innerText = input.value + " is cool"
      } else {
            textModified.innerText = "Please enter a name"

      }
}