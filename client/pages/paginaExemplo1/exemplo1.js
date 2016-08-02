import { inject } from 'aurelia-framework';
import { DialogService } from 'aurelia-dialog';

@inject(DialogService)
export class Exemplo1 {
	exemploSelectData = [
		{ key: "Test 1", value: 1 },
		{ key: "Test 2", value: 2 },
		{ key: "Test 3", value: 3 }
	];
	constructor(dialogService) {
		// Inicialização de propriedades e injeção de dependências
  	this.dialogService = dialogService;
	}

	submit() {
		alert(`
input exemplo 1: ${this.inputExemplo1}
input exemplo 2: ${this.inputExemplo2}
select exemplo value: ${this.selectExemplo}
			`)
	}

    person = { firstName: 'Wade', middleName: 'Owen', lastName: 'Watts' };

    openPopUp() {
        this.dialogService.open({ viewModel: '/client/pages/paginaExemplo1/modal' , model: this.person }).then(response => {
            if (!response.wasCancelled) {
                console.log('good - ', response.output);
            } else {
                console.log('bad');
            }
            console.log(response.output);
        });
    }
}
