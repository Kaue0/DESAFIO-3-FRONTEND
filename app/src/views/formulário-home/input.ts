import {Formatacao} from "./formatacao.js"

export class Input extends Formatacao {
    constructor (protected elemento: HTMLFormElement) {
        super()
    }

    public render(titulo: string, tipo: string): void {
        this.elemento.innerHTML += this.template(titulo, tipo)
    }

    private template(titulo: string, tipo: string): string{ 
        return `
            <div class="form-group">
                <label for="${titulo.trim()}">${super.Formata(titulo)}:</label>
                <input type="${tipo}" class="form-input" id="${titulo.trim()}" name="${titulo.trim()}" placeholder="${super.Formata(titulo)}">
            </div>
        `
    }




}