import { Navbar } from "./views/navbar/navbar.js";
import { ClienteController } from "./controllers/cliente-controller.js";
const navbar = new Navbar(document.querySelector("#navbar"));
navbar.render();
const controller = new ClienteController();
controller.atualizar();
