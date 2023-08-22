import { Formatacao } from "./formatacao.js";
export class CampoTurno extends Formatacao {
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
                <label for="turno">
                    ${super.Formata(titulo)}:
                </label>

                <select class="form-input" id="turno" name="turno">
                    ${enums.map((turno) => {
            return `<option value="${turno}">${turno}</option>`;
        }).join("")}
                </select>
            </div>
        `;
    }
}
