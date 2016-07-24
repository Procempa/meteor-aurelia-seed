import './exemplo1.html';

export class Exemplo1 {
	exemploSelectData = [
		{ key: "Test 1", value: 1 },
		{ key: "Test 2", value: 2 },
		{ key: "Test 3", value: 3 }
	];
	constructor() {
		// Inicialização de propriedades e injeção de dependências
	}

	submit() {
		alert(`
input exemplo 1: ${this.inputExemplo1}
input exemplo 2: ${this.inputExemplo2}
select exemplo value: ${this.selectExemplo}
			`)
	}
}
