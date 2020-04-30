import { Component,DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template:`
        <span *ngIf = "emailContact">
            <h4>{{title}}</h4>
            <strong>Email de contacto:</strong> {{emailContact}} 
            <button (click)="elimarEmailLocalStorage()">Eliminar Contacto</button>
        </span>
  `,
})

export class MostrarEmailComponent implements OnInit, DoCheck {
    public title:string;
    public emailContact:string;
    constructor(){
        this.title = 'Mostrar Email'
    }

    ngOnInit(){
        this.emailContact = localStorage.getItem('email');
    }
    
    ngDoCheck(){
        this.emailContact = localStorage.getItem('email'); 
    }

    elimarEmailLocalStorage(){
        localStorage.removeItem('email');
        localStorage.clear(); //Nos elimina todo el LocaStorage
    }

}