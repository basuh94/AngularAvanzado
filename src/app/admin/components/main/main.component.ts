import { Component } from '@angular/core';

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html'
})

export class MainComponent {
    public title:string;
    public emailContact:string;
  
    constructor(){
        this.title = 'Panel de Administración'
    }

}

