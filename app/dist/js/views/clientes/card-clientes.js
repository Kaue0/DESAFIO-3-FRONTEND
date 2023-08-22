var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Modal } from "../modal/modais.js";
import { domInjector } from "../../decorators/dom-injector.js";
export class Card {
    constructor(target) {
        this.target = target;
        this.modalDoCard = new Modal(this.aberto);
    }
    Vazio() {
        this.target.innerHTML = "<h2>Sem clientes.</h2>";
    }
    cardPequeno(info) {
        const descricao = this.criaDescricao(info);
        descricao.addEventListener("click", () => {
            this.modalDoCard.template(info);
        });
        this.target.appendChild(descricao);
    }
    criaDescricao(info) {
        const card = document.createElement("div");
        card.classList.add("card");
        const cardTop = this.cardHeader(info.nomeDoAnimal);
        const cardBody = this.cardBody(info.data);
        card.appendChild(cardTop);
        card.appendChild(cardBody);
        return card;
    }
    cardHeader(nomeAnimal) {
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-title");
        const texto = document.createElement("h2");
        texto.textContent = nomeAnimal;
        cardHeader.appendChild(texto);
        return cardHeader;
    }
    cardBody(data) {
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-content");
        const texto = document.createElement("p");
        texto.textContent = "Data: ";
        const dataFormatada = this.formataData(data);
        cardBody.appendChild(texto);
        cardBody.appendChild(dataFormatada);
        return cardBody;
    }
    formataData(data) {
        const textoData = document.createElement("p");
        textoData.textContent = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
        return textoData;
    }
}
__decorate([
    domInjector("#aberto")
], Card.prototype, "aberto", void 0);
