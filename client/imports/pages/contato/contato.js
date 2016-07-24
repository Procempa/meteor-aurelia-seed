import './contato.html';
import { Meteor } from 'meteor/meteor';
import Contatos from '/imports/collections/contatos';
import validate from 'validate.js';

const _REGRAS_VALIDACAO_CONTATO = {
	"nome": {
		"presence": {
			"message": "deve ser informado"
		}
	},
	"fone": {
		"presence": {
			"message": "deve ser informado"
		},
		"numericality": {
			"onlyInteger": true,
			"strict": true,
			"notValid": "deve ser numérico",
			"greaterThan": 5100000000,
			"notGreaterThan": "deve ser um telefone de 8 dígitos iniciando pelo DDD 51",
			"lessThanOrEqualTo": 5199999999,
			"notLessThanOrEqualTo": "deve ser um telefone de 8 dígitos iniciando pelo DDD 51"

		}
	}
}

export class Contato {

	contatos = [];
	contato = new ContatoNovo();
	erros = [];
	tiposFone = [];

	constructor() {
		this.tiposFone.push({ key: "Comercial", value: 'com' });
		this.tiposFone.push({ key: "Residencial", value: 'res' });
		this.tiposFone.push({ key: "Celular", value: 'cel' });

		Meteor.subscribe("contatos", () => {
			Contatos
				.find()
				.observe({
					added: contato => {
						this.contatos.push(contato)
					},
					changed: contato => {
						let index = this.contatos.findIndex(c => c._id === contato._id);
						this.contatos.splice(index, 1, contato);
					},
					removed: contato => {
						let index = this.contatos.findIndex(c => c._id === contato._id);
						this.contatos.splice(index, 1);
					}
				});
		});
	}

	submit() {
		var erros = validate(this.contato, _REGRAS_VALIDACAO_CONTATO);
		if (erros) {
			this.erros = erros;
		} else {
			this.erros = undefined;
			if (this.contato._id) {
				Contatos.update(this.contato._id, { $set: { 'nome': this.contato.nome, 'fone': this.contato.fone, 'tipoFone': this.contato.tipoFone } });
			} else {
				Contatos.insert(this.contato);
			}
			this.contato = new ContatoNovo();
			document.getElementById('submit').innerHTML = "Adicionar";
		}
	}

	remover(contato) {
		Contatos.remove(contato._id);
	}

	editar(contato) {
		document.getElementById('submit').innerHTML = "Atualizar";
		this.contato = contato;
	}
}

class ContatoNovo {
	constructor() {
		this.nome = "",
			this.fone = "",
			this.tipoFone = "cel"
	}
}
