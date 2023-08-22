import {CampoPorte} from "./campo-porte.js"
import {TituloForm}  from "./titulo-form.js"
import {BotaoSubmit}  from "./botao-submit.js"
import {Input}  from "./input.js"
import { SecaoSplit } from "./secao-split.js"
import { AnimalPorte } from "../../enums/animal-porte.js"
import { CampoTurno } from "./campo-turno.js"
import { Turno } from "../../enums/turno.js"

export class Form {
    private secaoSplit: SecaoSplit
    private tituloForm: TituloForm
    private inputs: Input
    private campoPorte: CampoPorte
    private campoTurno: CampoTurno
    private botaoSubmit: BotaoSubmit

    constructor(private formElement: HTMLFormElement,) {
        this.secaoSplit = new SecaoSplit(this.formElement)
        this.inputs = new Input(this.formElement)
        this.tituloForm = new TituloForm(this.formElement)
        this.campoTurno = new CampoTurno(this.formElement)
        this.campoPorte = new CampoPorte(this.formElement)
        this.botaoSubmit = new BotaoSubmit(this.formElement)        
    }

    public renderForm(): void {
        this.tituloForm.render("Tutor:") 

        this.inputs.render("Nome", "text")
        this.inputs.render("Telefone", "phone")
        this.inputs.render("Endereco", "text")
        this.inputs.render("Data", "date")
        this.campoTurno.render("Turno", [Turno.M, Turno.T])

        this.secaoSplit.template()

        this.tituloForm.render("Animal:")

        this.inputs.render("Apelido", "text")
        this.inputs.render("Idade", "number")
        this.campoPorte.render("Porte", [AnimalPorte.P, AnimalPorte.M, AnimalPorte.G])

        this.botaoSubmit.render()
    }

}