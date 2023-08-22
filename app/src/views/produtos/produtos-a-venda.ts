import { Porcao } from "../../interfaces/porcao.js"
import { Produto } from "../../models/produto.js"
import { BotaoCarrinho } from "../carrinho/botao-carrinho.js"

export class ProdutoAVenda {
    constructor(private target: HTMLElement) {}

    public mostrar(info: Produto): void {
        const cardComercio = this.criaCardComercio(info)
        this.target.appendChild(cardComercio)
    }

    private criaCardComercio(info: Produto): HTMLElement {
        const card = document.createElement("div")
        card.className = "card-comercio"

        const foto = this.cardComercioFoto(info)
        const descricao = this.criaDescricaoCard(info)

        card.appendChild(foto)
        card.appendChild(descricao)

        return card
    }

    private cardComercioFoto(info: Produto): HTMLElement {
        const cardFoto = document.createElement("div")
        cardFoto.className = "card-comercio-foto"

        const foto = document.createElement("img")
        foto.src = info.foto
        foto.alt = info.titulo


        cardFoto.appendChild(foto)

        return cardFoto
    }

    private criaDescricaoCard(info: Produto): HTMLElement {
        const descricaoCard = document.createElement("div")
        descricaoCard.className = "desc"

        const tipo = this.criaTexto(info.tipo)
        tipo.classList.add("tipo")
        const nomeDoProduto = this.criaTitulo("h2", info.titulo)
        nomeDoProduto.classList.add("titulo")

        const precoProd = this.criaTitulo("h3", `R$ ${info.precoTotal[0].preco.toFixed(2)}`)
        precoProd.classList.add("preco")

        const botaoCarrinho = BotaoCarrinho.criaBotaoComprar(info)


        descricaoCard.appendChild(tipo)
        descricaoCard.appendChild(nomeDoProduto)
        descricaoCard.appendChild(precoProd)
        descricaoCard.appendChild(botaoCarrinho)

        return descricaoCard
    }

    private criaTitulo(seletor: string, s: string): HTMLElement {
        const header = document.createElement(seletor)
        header.textContent = s
        return header
    }

    private criaTexto(s: string): HTMLElement {
        const desc = document.createElement("p")
        desc.textContent = s
        return desc
    }


}