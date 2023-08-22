export class MensagemView {
    constructor(element) {
        this.element = element;
    }
    render(texto) {
        this.element.innerHTML = `${texto}`;
        this.element.classList.add(`padrao`);
        this.element.classList.remove("inv");
        this.element.classList.add("mostrar");
        setTimeout(() => {
            this.element.innerHTML = "";
            this.element.classList.remove(`mensagem-padrao`);
            this.element.classList.add("inv");
            this.element.classList.remove("mostrar");
        }, 4000);
    }
}
