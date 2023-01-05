// validaçao de números para a aplicação
export function notANumber (value) {
    return isNaN(value) || value == ""
}

export function calculateIMC(weight, height) {
    return (weight / ((height /100) ** 2)).toFixed(2)
}