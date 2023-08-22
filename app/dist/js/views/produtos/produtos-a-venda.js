import { BotaoCarrinho } from "../carrinho/botao-carrinho.js";
export class ProdutoAVenda {
    constructor(target) {
        this.target = target;
    }
    mostrar(info) {
        const cardComercio = this.criaCardComercio(info);
        this.target.appendChild(cardComercio);
    }
    criaCardComercio(info) {
        const card = document.createElement("div");
        card.className = "card-comercio";
        const foto = this.cardComercioFoto(info);
        const descricao = this.criaDescricaoCard(info);
        card.appendChild(foto);
        card.appendChild(descricao);
        return card;
    }
    cardComercioFoto(info) {
        const cardFoto = document.createElement("div");
        cardFoto.className = "card-comercio-foto";
        const foto = document.createElement("img");
        foto.src = info.foto;
        foto.alt = info.titulo;
        cardFoto.appendChild(foto);
        return cardFoto;
    }
    criaDescricaoCard(info) {
        const descricaoCard = document.createElement("div");
        descricaoCard.className = "desc";
        const tipo = this.criaTexto(info.tipo);
        tipo.classList.add("tipo");
        const nomeDoProduto = this.criaTitulo("h2", info.titulo);
        nomeDoProduto.classList.add("titulo");
        const precoProd = this.criaTitulo("h3", `R$ ${info.precoTotal[0].preco.toFixed(2)}`);
        precoProd.classList.add("preco");
        const botaoCarrinho = BotaoCarrinho.criaBotaoComprar(info);
        descricaoCard.appendChild(tipo);
        descricaoCard.appendChild(nomeDoProduto);
        descricaoCard.appendChild(precoProd);
        descricaoCard.appendChild(botaoCarrinho);
        return descricaoCard;
    }
    criaTitulo(seletor, s) {
        const header = document.createElement(seletor);
        header.textContent = s;
        return header;
    }
    criaTexto(s) {
        const desc = document.createElement("p");
        desc.textContent = s;
        return desc;
    }
}
