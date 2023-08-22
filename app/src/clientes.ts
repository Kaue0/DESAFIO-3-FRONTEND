import {Navbar} from "./views/navbar/navbar.js"
import {ClienteController} from "./controllers/cliente-controller.js"

const navbar: Navbar = new Navbar(document.querySelector("#navbar") as HTMLElement)
navbar.render()
const controller: ClienteController = new ClienteController()
controller.atualizar()