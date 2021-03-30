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

function operate(f, x, y) {
    return f(x, y)
}

console.log(operate(divide, 8, 2))