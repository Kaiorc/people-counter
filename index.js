let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

//Incrementa ao contador sempre que é ativado
//"onclick" no .html
function increment() {
    count += 1
    countEl.textContent = count
}

//Salva o valor do contador sempre que é ativado
//"onclick" no .html e seta o valor do contador
//para 0
function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash;
    count = 0;
    countEl.textContent = count;
}

