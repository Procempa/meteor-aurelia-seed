import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';

@inject(DialogController)
export class EditPerson {
    person = { firstName: '' };
    constructor(controller) {
        this.controller = controller;
    }
    activate(person) {
        this.person = person;
    }
}
