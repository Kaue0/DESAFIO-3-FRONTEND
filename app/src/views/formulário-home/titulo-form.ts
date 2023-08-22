import {Formatacao} from "./formatacao.js"

export class TituloForm extends Formatacao {
    constructor (protected elemento: HTMLFormElement) {
        super()
    }

    public render(titulo: string): void {
        this.elemento.innerHTML += this.template(titulo)
    }

    private template(titulo: string): string{
        return `
                <h3>${titulo}</h3>
        `
    }
}