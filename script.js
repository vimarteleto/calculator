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
    return x ** (1/y)
}

function porcentagem(x) {
    return x * 0.01
    
}

console.log(operate(root, 25, 2))

// eventos
let operacao
let x // primeiro fator
let y // segundo fator
let f // operacao
let result // resultado
const tela = document.getElementById('tela')
const numeros = document.querySelectorAll('.botoes-numero')
numeros.forEach(numero => {
    numero.addEventListener('click', () => {
        if(result) {
            tela.textContent = numero.textContent
        }
        else {
            tela.textContent += numero.textContent
        }
        
    })
})

const igual = document.getElementById('igual')
igual.addEventListener('click', () => {
    y = Number(tela.textContent)
    if(f) {
        result = operate(f, x, y)
        tela.textContent = result
    }  
    console.log(y) 
    console.log(result)
})

const soma = document.getElementById('soma')
soma.addEventListener('click', () => {
    x = Number(tela.textContent)
    tela.textContent = ''
    f = add
    console.log(x)
    console.log(f)
})

const ac = document.getElementById('ac')
ac.addEventListener('click', () => {
    x = ''
    y = ''
    f = ''
    result = ''
    tela.textContent = ''
})



