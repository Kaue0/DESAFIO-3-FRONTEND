import { Carrinho } from "../../models/carrinho.js";
import { MensagemView } from "../mensagem/mensagem-view.js";
export class BotaoCarrinho {
    static criaBotaoComprar(info) {
        const botaoComprar = document.createElement("button");
        botaoComprar.className = "botao-comprar";
        const logoCarrinho = document.createElement("img");
        logoCarrinho.src = "../icons/carrinho.png";
        logoCarrinho.alt = "Carrinho de compras";
        botaoComprar.appendChild(logoCarrinho);
        botaoComprar.addEventListener("click", () => {
            Carrinho.salvar(info);
            this.mensagem.render("Produto adicionado ao carrinho.");
        });
        return botaoComprar;
    }
}
BotaoCarrinho.mensagem = new MensagemView(document.querySelector("#mensagens"));
