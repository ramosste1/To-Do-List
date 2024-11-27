function criarItem(event) {
    console.log(event)
    var input = document.querySelector(".campos input")
    if (event.keyCode == 13) {
        var itens = document.querySelector(".itens")

        var boxInput = document.createElement("div")
        boxInput.classList.add("box-input")

        input.value.trim()

        if (input.value === '') {
            alert('Insira um item.') 
            return

        }

        if (itens.children.length >= 15) {
            alert('Voce so pode add ate 15 itens na sua lista!')
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
