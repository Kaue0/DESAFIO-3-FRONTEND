export class MensagemErroView {

    constructor(private element: HTMLDivElement) {}

    public render(texto: string): void {
        this.element.innerHTML = `${texto}`

        this.element.classList.add(`erro`)

        this.element.classList.remove("inv")

        this.element.classList.add("mostrar")

        setTimeout(() => {
            this.element.innerHTML = ""
            this.element.classList.remove(`erro`)
            this.element.classList.add("inv")
            this.element.classList.remove("mostrar")
        }, 4000)
    }
}