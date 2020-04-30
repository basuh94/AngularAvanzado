import { Component } from '@angular/core';

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
    public title:string;
    public emailContact:string;
  
    constructor(){
        this.title = 'Panel de Administración'
    }

}

