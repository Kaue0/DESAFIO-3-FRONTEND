import { Formatacao } from "./formatacao.js";
export class BotaoSubmit extends Formatacao {
    constructor(elemento) {
        super();
        this.elemento = elemento;
    }
    render() {
        this.elemento.innerHTML += this.template();
    }
    template() {
        return `
            <div class="form-group">
                <button class="form-input" type="submit">Enviar</button>
            </div>
        `;
    }
}
