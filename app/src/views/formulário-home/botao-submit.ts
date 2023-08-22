import {Formatacao} from "./formatacao.js"

export class BotaoSubmit extends Formatacao {
    constructor(protected elemento: HTMLFormElement) {
        super()
    }

    public render(): void {
        this.elemento.innerHTML += this.template()
    }

    private template(): string {
        return `
            <div class="form-group">
                <button class="form-input" type="submit">Enviar</button>
            </div>
        `
    }
}