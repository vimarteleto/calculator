// variaveis
let x // primeiro fator
let y // segundo fator
let f // operacao

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

function porcentagem(x, y) {
    return x * 0.01 * y
    
}

// eventos
let result // resultado
const tela = document.getElementById('tela')
const numeros = document.querySelectorAll('.botoes-numero')
numeros.forEach(numero => {
    numero.addEventListener('click', () => {
        // se existe um resultado prévio, receber novo valor para tela e desconsiderar o resultado
        if(result) {
            tela.textContent = numero.textContent
            result = ''
        }
        // se nao existe resultado, concatenar os botoes clicados
        else {
            tela.textContent += numero.textContent
        }
        
    })
})

const operacao = document.querySelectorAll('.botoes-operacao')
operacao.forEach(opera => {
    opera.addEventListener('click', () => {
        x = Number(tela.textContent)
        tela.textContent = ''
        // capturar o id do botao-operacao como function, e nao como string
        f = window[opera.getAttribute('id')]
    })
})

const igual = document.getElementById('igual')
igual.addEventListener('click', () => {
    y = Number(tela.textContent)
    if(f) {
        result = operate(f, x, y)
        tela.textContent = result
    }  
})

const ac = document.getElementById('ac')
ac.addEventListener('click', () => {
    x, y, f, result, tela.textContent = ''
})