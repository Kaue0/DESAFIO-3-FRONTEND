import { Modal } from "../modal/modais.js"
import { domInjector } from "../../decorators/dom-injector.js"
import { Cliente } from "../../models/cliente.js"

export class Card {

    @domInjector("#aberto")
    private aberto: HTMLElement

    private modalDoCard: Modal 

    constructor(private target: HTMLElement) { 
        this.modalDoCard = new Modal(this.aberto)
    }

    public Vazio(): void {
        this.target.innerHTML = "<h2>Sem clientes.</h2>"
    }

    public cardPequeno(info: Cliente): void {
        const descricao = this.criaDescricao(info)
        descricao.addEventListener("click", () => {
            this.modalDoCard.template(info)
        })

        this.target.appendChild(descricao)
    }

    private criaDescricao(info: Cliente): HTMLElement {
        const card = document.createElement("div")
        card.classList.add("card")

        const cardTop = this.cardHeader(info.nomeDoAnimal)
        const cardBody = this.cardBody(info.data)

        card.appendChild(cardTop)
        card.appendChild(cardBody)

        return card
    }

    private cardHeader(nomeAnimal: string): HTMLElement {
        const cardHeader = document.createElement("div")
        cardHeader.classList.add("card-title")

        const texto = document.createElement("h2")
        texto.textContent = nomeAnimal
        cardHeader.appendChild(texto)

        return cardHeader
    }

    private cardBody(data: Date): HTMLElement {
        const cardBody = document.createElement("div")
        cardBody.classList.add("card-content")

        const texto = document.createElement("p")
        texto.textContent = "Data: "
        const dataFormatada = this.formataData(data)

        cardBody.appendChild(texto)
        cardBody.appendChild(dataFormatada)

        return cardBody
    }

    private formataData(data: Date): HTMLElement {
        const textoData = document.createElement("p")
        textoData.textContent = `${data.getDate()}/${data.getMonth()}/${  data.getFullYear()}`
        return textoData
    }

}