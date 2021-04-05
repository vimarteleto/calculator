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
const telaPrincipal = document.getElementById('tela-principal')
const telaSecundaria = document.getElementById('tela-secundaria')
const numeros = document.querySelectorAll('.botoes-numero')
numeros.forEach(numero => {
    numero.addEventListener('click', () => {
        // se existe um resultado prévio, receber novo valor para tela e desconsiderar o resultado
        if(result) {
            telaPrincipal.textContent = numero.textContent
            result = ''
        }
        // se nao existe resultado, concatenar os botoes clicados
        else {
            telaPrincipal.textContent += numero.textContent
        }        
    })
})

const operacao = document.querySelectorAll('.botoes-operacao')
operacao.forEach(opera => {
    opera.addEventListener('click', () => {
        x = Number(telaPrincipal.textContent)
        telaSecundaria.textContent = `${telaPrincipal.textContent} ${opera.textContent}`
        telaPrincipal.textContent = ''
        // capturar o id do botao-operacao como function, e nao como string
        f = window[opera.getAttribute('id')]
    })
})

const igual = document.getElementById('igual')
igual.addEventListener('click', () => {
    y = Number(telaPrincipal.textContent)
    if(f) {
        result = operate(f, x, y)
        telaPrincipal.textContent = result
    }  
    telaSecundaria.textContent += ' ' + y
})

const ac = document.getElementById('ac')
ac.addEventListener('click', () => {
    x, y, f, result = ''
    telaPrincipal.textContent = ''
    telaSecundaria.textContent = ''
})