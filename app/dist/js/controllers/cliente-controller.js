var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from '../decorators/dom-injector.js';
import { MensagemView } from '../views/mensagem/mensagem-view.js';
import { Card } from '../views/clientes/card-clientes.js';
import { FormValidator } from '../validators/form-validator.js';
import { Cliente } from '../models/cliente.js';
export class ClienteController {
    constructor() {
        this.mensagem = new MensagemView(document.querySelector("#mensagens"));
        this.card = new Card(document.querySelector("#cardPlace"));
        this.Turno = document.querySelector('#turno');
        this.AnimalPorte = document.querySelector('#portedoanimal');
        this.formValidator = new FormValidator();
    }
    submit() {
        if (this.validaInputs() == true) {
            const cliente = new Cliente(this.inputNome.value, this.inputTelefone.value, this.inputEndereco.value, new Date(this.inputData.value), this.Turno.value, this.inputAnimalApelido.value, Number(this.inputAnimalIdade.value), this.AnimalPorte.value);
            this.mensagem.render("Dados enviados com sucesso!");
            cliente.guarda();
        }
    }
    validaInputs() {
        if (this.formValidator.Preenchido(this.inputNome.value) == false) {
            return false;
        }
        if (this.formValidator.telefoneValido(this.inputTelefone.value) == false || this.formValidator.Preenchido(this.inputTelefone.value) == false) {
            return false;
        }
        if (this.formValidator.Preenchido(this.inputEndereco.value) == false) {
            return false;
        }
        if (this.formValidator.dataValida(this.inputData.value) == false || this.formValidator.Preenchido(this.inputData.value) == false) {
            return false;
        }
        if (this.formValidator.Preenchido(this.Turno.value) == false) {
            return false;
        }
        if (this.formValidator.Preenchido(this.inputAnimalApelido.value) == false) {
            return false;
        }
        if (this.formValidator.Preenchido(this.inputAnimalIdade.value) == false) {
            return false;
        }
        if (this.formValidator.Preenchido(this.AnimalPorte.value) == false) {
            return true;
        }
        return true;
    }
    atualizar() {
        const listaClientes = Cliente.iteraClientes();
        if (listaClientes.length > 0) {
            listaClientes.forEach(cliente => {
                this.card.cardPequeno(cliente);
            });
        }
        else {
            this.card.Vazio();
        }
    }
}
__decorate([
    domInjector('#Nome')
], ClienteController.prototype, "inputNome", void 0);
__decorate([
    domInjector('#Telefone')
], ClienteController.prototype, "inputTelefone", void 0);
__decorate([
    domInjector('#Endereco')
], ClienteController.prototype, "inputEndereco", void 0);
__decorate([
    domInjector('#Data')
], ClienteController.prototype, "inputData", void 0);
__decorate([
    domInjector('#Apelido')
], ClienteController.prototype, "inputAnimalApelido", void 0);
__decorate([
    domInjector('#Idade')
], ClienteController.prototype, "inputAnimalIdade", void 0);
