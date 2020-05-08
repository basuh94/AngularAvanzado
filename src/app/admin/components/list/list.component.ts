import { Component } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html'
})

export class ListComponent {
    public title:string;
    public emailContact:string;
    public numbers = new Array(15);
  
    constructor(){
        this.title = 'Listado'
    }

}