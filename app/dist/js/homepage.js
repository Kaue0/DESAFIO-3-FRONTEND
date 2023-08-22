import { Navbar } from "./views/navbar/navbar.js";
import { ClienteController } from "./controllers/cliente-controller.js";
import { Form } from "./views/formulário-home/form.js";
const navbar = new Navbar(document.querySelector("#navbar"));
navbar.render();
const formElement = document.querySelector("#form");
const form = new Form(formElement);
form.renderForm();
const controller = new ClienteController();
formElement.addEventListener("submit", (evento) => {
    evento.preventDefault();
    controller.submit();
});
