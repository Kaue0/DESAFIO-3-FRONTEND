import { Formatacao } from "./formatacao.js";
export class TituloForm extends Formatacao {
    constructor(elemento) {
        super();
        this.elemento = elemento;
    }
    render(titulo) {
        this.elemento.innerHTML += this.template(titulo);
    }
    template(titulo) {
        return `
                <h3>${titulo}</h3>
        `;
    }
}
