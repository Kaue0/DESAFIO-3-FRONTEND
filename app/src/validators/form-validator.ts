import { AlertaView } from "../views/mensagem/alerta-view.js"
import { MensagemView } from "../views/mensagem/mensagem-view.js"

export class FormValidator {

    
    private alerta: AlertaView = new AlertaView(document.querySelector("#mensagens") as HTMLDivElement)


    public Preenchido(...campos: Array<any>): boolean {
        campos.forEach(input => {
            if (input == null || input.length == 0) {
                this.alerta.render("Preencha todos os campos para prosseguir!")
                return false
            }
        })

        return true

    }

    public telefoneValido(input: string): boolean {
        if (input.length < 8 || input.length > 16) {
            this.alerta.render("Insira um telefone válido.")
            return false
        }
        return true
    }

    public dataValida(input: string): boolean {
        const teste = /^\d{4}\-\d{2}\-\d{2}$/
        if (teste.test(input) == false) {
            this.alerta.render("Data inválida!")
            return false
        }
        return true
    }
}