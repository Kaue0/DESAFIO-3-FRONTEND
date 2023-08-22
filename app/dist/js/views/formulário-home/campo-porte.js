import { Formatacao } from "./formatacao.js";
export class CampoPorte extends Formatacao {
    constructor(elemento) {
        super();
        this.elemento = elemento;
    }
    render(titulo, enums) {
        this.elemento.innerHTML += this.template(titulo, enums);
    }
    template(titulo, enums) {
        return `
            <div class="form-group">
                <label for="portedoanimal">
                    ${super.Formata(titulo)}:
                </label>

                <select class="form-input" id="portedoanimal" name="portedoanimal">
                    ${enums.map((porte) => {
            return `<option value="${porte}">${porte}</option>`;
        }).join("")}
                </select>
            </div>
        `;
    }
}
