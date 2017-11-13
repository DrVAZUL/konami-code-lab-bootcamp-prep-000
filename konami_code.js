const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const index = 0

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)
  if(key === code[index]) {
    index++;

  if(index === code.length) {
    alert("You did it!")
    index = 0
  }
} else {
  index = 0
}

}


function init() {
 const input = document.querySelector("body")
 input.addEventListner('keydown', onKeyDownHandler
 console.log(.which)

}
