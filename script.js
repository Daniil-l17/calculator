

const input = document.querySelector('#display')
let nextValue = false

function appendToDisplay(value) {
  if(input.value.length <= 10){
    const nextpred = ['+', '-', '*', '/', '.']
    if (input.value === 'Error') return input.value = value
    if (input.value === '0') return input.value = value
    if (nextpred.includes(value)) {
      if (!nextValue) {
        input.value += value
        nextValue = true
      }
    }
    else if (!nextpred.includes(value)) {
      input.value += value
      nextValue = false
    }
  }
}



function calculate() {
  nextValue = false
  try {
    input.value = eval(input.value)
  }
  catch {
    input.value = 'Error'
  }
}


function clearDisplay() {
  input.value = '0'
}