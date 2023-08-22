import {Carrinho} from "../../models/carrinho.js"
import { Produto } from "../../models/produto.js"
import { MensagemView } from "../mensagem/mensagem-view.js"

export class BotaoCarrinho {

    
    private static mensagem: MensagemView = new MensagemView(document.querySelector("#mensagens") as HTMLDivElement)

    public static criaBotaoComprar(info: Produto): HTMLElement {
        const botaoComprar = document.createElement("button")
        botaoComprar.className = "botao-comprar"

        const logoCarrinho = document.createElement("img")
        logoCarrinho.src = "../icons/carrinho.png"
        logoCarrinho.alt = "Carrinho de compras"

        botaoComprar.appendChild(logoCarrinho)

        botaoComprar.addEventListener("click", () => {
            Carrinho.salvar(info)
            this.mensagem.render("Produto adicionado ao carrinho.")
        })

        return botaoComprar
    }
 

}