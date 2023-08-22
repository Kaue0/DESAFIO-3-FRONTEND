import {Navbar} from "./views/navbar/navbar.js"
import {ClienteController} from "./controllers/cliente-controller.js"
import {Form} from "./views/formulário-home/form.js"

const navbar: Navbar = new Navbar(document.querySelector("#navbar") as HTMLElement)
navbar.render()

const formElement: HTMLFormElement = document.querySelector("#form") as HTMLFormElement
const form: Form = new Form(formElement)
form.renderForm()


const controller: ClienteController = new ClienteController()
formElement.addEventListener("submit", (evento) => {
    evento.preventDefault()
    controller.submit()
})
