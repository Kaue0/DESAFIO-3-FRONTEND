import {Formatacao} from "./formatacao.js"

export class CampoPorte extends Formatacao {
    constructor(protected elemento: HTMLFormElement) {
        super()
    }

    public render(titulo: string, enums: string[]): void {
        this.elemento.innerHTML += this.template(titulo, enums)
    }

    private template(titulo: string, enums: string[]): string {
        return `
            <div class="form-group">
                <label for="portedoanimal">
                    ${super.Formata(titulo)}:
                </label>

                <select class="form-input" id="portedoanimal" name="portedoanimal">
                    ${enums.map((porte: string) => {
                        return `<option value="${porte}">${porte}</option>`
                    }).join("")}
                </select>
            </div>
        `
    }
}