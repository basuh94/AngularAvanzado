import { Component } from '@angular/core';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html'
})

export class AddComponent {
    public title:string;
    public emailContact:string;
  
    constructor(){
        this.title = 'Añadir'
    }

}