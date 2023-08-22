import { Cliente } from "../../models/cliente.js"
import { View } from "../view.js"

export class Modal {
    constructor(private elemento: HTMLElement) {}
        
    private saiuDoModal() {
        this.elemento.classList.add("inv")
        this.elemento.classList.remove("mostrar")
        this.elemento.innerHTML = ""
    }

    public template(info: Cliente) {
        this.elemento.classList.add("mostrar")
        this.elemento.appendChild(this.modalAberto(info))
    }

    private modalAberto(info: Cliente): HTMLElement {
        const modal = document.createElement("div")
        modal.classList.add("modal")

        const modalTop = this.modalHeader(info.nomeDoAnimal)
        const modalBody = this.modalBody(info)
        const modalBottom = this.modalBottom()

        modal.appendChild(modalTop)
        modal.appendChild(modalBody)
        modal.appendChild(modalBottom)

        return modal
    }

    private modalHeader(nomeDoAnimal: string): HTMLElement {
        const modalHeader = document.createElement("div")
        modalHeader.classList.add("header")

        const nomeAnimal = document.createElement("h1")
        nomeAnimal.textContent = nomeDoAnimal
        modalHeader.appendChild(nomeAnimal)

        return modalHeader
    }

    private modalBody(info: Cliente): HTMLElement {
        const modalBody = document.createElement("div")
        modalBody.classList.add("body")

        const cliente = document.createElement("p")
        cliente.textContent = `Cliente/Dono: ${info.nome}`

        const telefone = document.createElement("p")
        telefone.textContent = `Telefone: ${info.telefone}`

        const endereco = document.createElement("p")
        endereco.textContent = `Endereço: ${info.endereco}`

        const data = document.createElement("p")
        data.textContent = `Data: ${info.data.getDate()}/${info.data.getMonth()}/${info.data.getFullYear()}`

        const turno = document.createElement("p")
        turno.textContent = `Turno da visita: ${info.turno}`

        const idadeAnimal = document.createElement("p")
        idadeAnimal.textContent = `Idade do Animal: ${info.idadeDoAnimal} anos`

        const porteAnimal = document.createElement("p")
        porteAnimal.textContent = `Porte do Animal: ${info.porteDoAnimal}`

        modalBody.appendChild(cliente)
        modalBody.appendChild(telefone)
        modalBody.appendChild(endereco)
        modalBody.appendChild(data)
        modalBody.appendChild(turno)
        modalBody.appendChild(idadeAnimal)
        modalBody.appendChild(porteAnimal)

        return modalBody
    }

    private modalBottom(): HTMLElement {
        const modalBottom = document.createElement("div")
        modalBottom.classList.add("footer")

        const botaoSair = document.createElement("button")
        botaoSair.classList.add("botao-sair")

        const texto = document.createElement("p")
        texto.textContent = "Fechar"
        botaoSair.appendChild(texto)

        botaoSair.addEventListener("click", () => {
            this.saiuDoModal()
        })

        modalBottom.appendChild(botaoSair)
        return modalBottom
    }

}