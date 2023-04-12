function displayData(n) {
    input.value += n
}

function allClear() {
    input.value = ""
}

function backSpace() {
    input.value = input.value.slice(0, -1)
}

function equalTo() {
    input.value = eval(input.value)
}