import { Component,DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template:`
    <div class="panel panel-default">
      <h2>{{title}}</h2>
      <hr/>
      <mostrar-email></mostrar-email>
      <guardar-email></guardar-email>
    </div> 
  `
})

export class MainEmailComponent implements OnInit{
    public title:string;
    public emailContact:string;
    constructor(){
        this.title = 'Modulo de Emails'
    }

    ngOnInit(){
      console.log("Componente principal del modulo EMAIL cargado");
    }

}