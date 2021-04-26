let f
let x
let y
// operações
function operate(f, x, y) {
    return f(x, y)
}

function add(x, y) {
    return x + y    
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y    
}

function divide(x, y) {
    return x / y    
}

function pow(x, y) {
    return x ** y
}

function root(x, y) {
    return x ** (1 / y)
}

function percentage(x, y) {
    return x * 0.01 * y    
}

// elementos
const screen = document.getElementById('screen')

const numbers = document.querySelectorAll('.button-number')
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(screen.textContent.length < 12) {
            screen.textContent += number.textContent
        }
    })
})

const operations = document.querySelectorAll('.button-operation')
operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if(!f) {

            f = window[operation.getAttribute('id')]

        } else {

        }
    })
})

ac.addEventListener('click', Allclear)
function Allclear() {
    screen.textContent = undefined
    f = undefined
    x = undefined
    y = undefined
}

function clearFunction() {
    screen.textContent = undefined
    f = undefined
}
