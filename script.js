var selecionarItem = null

function criarItem(event) {
    console.log(event)
    var input = document.querySelector(".campos input")
    if (event.keyCode == 13) {
        var itens = document.querySelector(".itens")

        var boxInput = document.createElement("div")
        boxInput.classList.add("box-input")

        input.value.trim()

        alerta('', 'none')

        if (input.value === '') {
            // alert('Insira um item.') 
            alerta('Escreva alguma coisa.', 'block')
            return

        }

        if (itens.children.length >= 15) {
            // alert('Voce so pode add ate 15 itens na sua lista!')
            alerta('Você só pode add até 15 itens na sua lista.', 'block')
            return
        }



        boxInput.innerHTML =
            `<input type="checkbox" id="caixinha">
            <label for="caixinha">${input.value}</label>`

        itens.appendChild(boxInput)

        input.value = ""



    }
}

document.addEventListener("keypress", criarItem)

document.querySelector(".itens").addEventListener("click", (event) => {
    var itemClicado = event.target.closest(".box-input")
    if (itemClicado) {
        if (selecionarItem) {

            selecionarItem.classList.remove("selecionado")
        }

        selecionarItem = itemClicado
        selecionarItem.classList.add("selecionado")
    }
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && selecionarItem) {
        selecionarItem.remove()
        selecionarItem = null
    }
})

function alerta(texto, display) {
    var alertaDiv = document.querySelector(".alerta")
    alertaDiv.innerHTML = texto 
    alertaDiv.style.display = display
}
