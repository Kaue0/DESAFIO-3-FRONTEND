import { domInjector } from '../decorators/dom-injector.js';
import { MensagemView } from '../views/mensagem/mensagem-view.js';
import { AlertaView } from '../views/mensagem/alerta-view.js';
import { MensagemErroView } from '../views/mensagem/mensagem-erro-view.js';
import { Card } from '../views/clientes/card-clientes.js'
import { Form } from '../views/formulário-home/form.js';
import { FormValidator } from '../validators/form-validator.js';
import { Cliente } from '../models/cliente.js';

export class ClienteController {
    private mensagem: MensagemView = new MensagemView(document.querySelector("#mensagens") as HTMLDivElement)
    private card: Card = new Card(document.querySelector("#cardPlace") as HTMLElement)
    
    @domInjector('#Nome')
    private inputNome: HTMLInputElement;
    @domInjector('#Telefone')
    private inputTelefone: HTMLInputElement;
    @domInjector('#Endereco')
    private inputEndereco: HTMLInputElement;
    @domInjector('#Data')
    private inputData: HTMLInputElement;
    private Turno: HTMLSelectElement = document.querySelector('#turno') as HTMLSelectElement
    @domInjector('#Apelido')
    private inputAnimalApelido: HTMLInputElement;
    @domInjector('#Idade')
    private inputAnimalIdade: HTMLInputElement;
    private AnimalPorte: HTMLSelectElement = document.querySelector('#portedoanimal') as HTMLSelectElement

    private formValidator = new FormValidator()

    
    
    public submit(): void {
        if (this.validaInputs() == true) {
            const cliente = new Cliente(this.inputNome.value, this.inputTelefone.value, this.inputEndereco.value, new Date(this.inputData.value), this.Turno.value, this.inputAnimalApelido.value, Number(this.inputAnimalIdade.value), this.AnimalPorte.value)
            
            this.mensagem.render("Dados enviados com sucesso!")
            
            cliente.guarda()
        }
    }
        
    private validaInputs(): boolean {
            
        // validação do nome
        if (this.formValidator.Preenchido(this.inputNome.value) == false) {
            return false
        }
            
        // validação do telefone
        if (this.formValidator.telefoneValido(this.inputTelefone.value) == false || this.formValidator.Preenchido(this.inputTelefone.value) == false) {
            return false
        }
            
        // validação do endereço
        if(this.formValidator.Preenchido(this.inputEndereco.value) == false) {
            return false
        }
            
        // validação da data
        if (this.formValidator.dataValida(this.inputData.value) == false || this.formValidator.Preenchido(this.inputData.value) == false) {
            return false
        }
            
        // validação do turno
        if (this.formValidator.Preenchido(this.Turno.value) == false) {
            return false
        }
            
        // validação do nome do animal
        if (this.formValidator.Preenchido(this.inputAnimalApelido.value) == false) {
            return false
        }
            
        // validação da idade do animal
        if (this.formValidator.Preenchido(this.inputAnimalIdade.value) == false) {
            return false
        }

        // validação do porte do animal
        if (this.formValidator.Preenchido(this.AnimalPorte.value) == false) {
            return true
        }
            
        return true
    }

    public atualizar(): void {
        const listaClientes = Cliente.iteraClientes()
    
        if (listaClientes.length > 0) {

            listaClientes.forEach(cliente => {
                this.card.cardPequeno(cliente)
            })

        } else {
            this.card.Vazio()
        }
    }

}
    