import { Formatacao } from "./formatacao.js";
export class SecaoSplit extends Formatacao {
    constructor(elemento) {
        super();
        this.elemento = elemento;
    }
    template() {
        return this.elemento.innerHTML += `
                <div class="secao-split">.</div>
        `;
    }
}
