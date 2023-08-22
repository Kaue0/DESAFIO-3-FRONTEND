import {Formatacao} from "./formatacao.js"

export class CampoTurno extends Formatacao {
    constructor(protected elemento: HTMLFormElement) {
        super()
    }

    public render(titulo: string, enums: string[]): void {
        this.elemento.innerHTML += this.template(titulo, enums)
    }

    private template(titulo: string, enums: string[]): string {
        return `
            <div class="form-group">
                <label for="turno">
                    ${super.Formata(titulo)}:
                </label>

                <select class="form-input" id="turno" name="turno">
                    ${enums.map((turno: string) => {
                        return `<option value="${turno}">${turno}</option>`
                    }).join("")}
                </select>
            </div>
        `
    }
}