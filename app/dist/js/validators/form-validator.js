import { AlertaView } from "../views/mensagem/alerta-view.js";
export class FormValidator {
    constructor() {
        this.alerta = new AlertaView(document.querySelector("#mensagens"));
    }
    Preenchido(...campos) {
        campos.forEach(input => {
            if (input == null || input.length == 0) {
                this.alerta.render("Preencha todos os campos para prosseguir!");
                return false;
            }
        });
        return true;
    }
    telefoneValido(input) {
        if (input.length < 8 || input.length > 16) {
            this.alerta.render("Insira um telefone válido.");
            return false;
        }
        return true;
    }
    dataValida(input) {
        const teste = /^\d{4}\-\d{2}\-\d{2}$/;
        if (teste.test(input) == false) {
            this.alerta.render("Data inválida!");
            return false;
        }
        return true;
    }
}
