import { Formatacao } from "./formatacao.js";
export class Input extends Formatacao {
    constructor(elemento) {
        super();
        this.elemento = elemento;
    }
    render(titulo, tipo) {
        this.elemento.innerHTML += this.template(titulo, tipo);
    }
    template(titulo, tipo) {
        return `
            <div class="form-group">
                <label for="${titulo.trim()}">${super.Formata(titulo)}:</label>
                <input type="${tipo}" class="form-input" id="${titulo.trim()}" name="${titulo.trim()}" placeholder="${super.Formata(titulo)}">
            </div>
        `;
    }
}
