import {Formatacao} from "./formatacao.js"

export class SecaoSplit extends Formatacao {
    constructor (protected elemento: HTMLFormElement) {
        super()
    }

    public template(): string {
        return this.elemento.innerHTML += `
                <div class="secao-split">.</div>
        `
    }
}