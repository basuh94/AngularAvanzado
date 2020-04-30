import { Component } from '@angular/core';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html'
})

export class EditComponent {
    public title:string;
    public emailContact:string;
  
    constructor(){
        this.title = 'Admin Edit'
    }

}