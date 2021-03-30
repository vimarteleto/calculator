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