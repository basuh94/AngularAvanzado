import { Component } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html'
})

export class ListComponent {
    public title:string;
    public emailContact:string;
  
    constructor(){
        this.title = 'Admin List'
    }

}