// to-do list:
// suportar expressoes matematicas corretamente
// suporte para teclado
// botao backspace

/////////////////////////////

let f
let x
let y
let result

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
// elemento da tela
const screen = document.getElementById('screen')

// elemento e função dos botoes de numero
const numbers = document.querySelectorAll('.button-number')
numbers.forEach(number => {
    number.addEventListener('click', () => {      
        if(screen.textContent == 'Invalid!' || screen.textContent == 'Too big!') {
            allClear()
        }
        if(screen.textContent.length < 12) {
            screen.textContent += number.textContent
            if(!f) {
                x = Number(screen.textContent)
            } else {
                y = Number(screen.textContent)
            }
        }
    })
})

// limitação do ponto (.) unico no display
dot.addEventListener('click', () => {
    if(!(screen.textContent.includes('.'))) {
        screen.textContent += dot.textContent
    }
})

// elementos e botoes de operação
const operations = document.querySelectorAll('.button-operation')
operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if(!f) {
            f = window[operation.getAttribute('id')]
            screen.textContent = undefined
        } else {
            x = operate(f, x, y)
            f = window[operation.getAttribute('id')]
            screen.textContent = undefined            
        }
    })
})


// botao de igual e calculo do resultado
equal.addEventListener('click', setResult)
function setResult() {
    result = operate(f, x, y)
    intResult = Math.trunc(result)
    console.log(result, intResult)
    if(result == Infinity) {
        allClear()
        screen.textContent = 'Invalid!'   

    } else if(intResult.toString().length > 10) {
        allClear()
        screen.textContent = 'Too big!'  

    } else {
        screen.textContent = result.toString().substr(0, 12)        
    }
}

// botao de limpeza
ac.addEventListener('click', allClear)
function allClear() {
    screen.textContent = undefined
    f = undefined
    x = undefined
    y = undefined
    result = undefined
}
