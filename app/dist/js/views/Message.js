export class Message {
    constructor(element) {
        this.element = element;
    }
    render(text, type) {
        this.element.innerHTML = `${text}`;
        this.element.classList.add(`${type}`);
        this.element.classList.remove("d-none");
        this.element.classList.add("d-flex");
        setTimeout(() => {
            this.element.innerHTML = "";
            this.element.classList.remove(`${type}`);
            this.element.classList.add("d-none");
            this.element.classList.remove("d-flex");
        }, 3000);
    }
}
