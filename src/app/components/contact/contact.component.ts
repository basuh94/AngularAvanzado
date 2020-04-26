import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title:string;
  public emailContact:string;
  constructor() { 
    this.title = 'Contacto';
  }

  ngOnInit() {
    console.log('contact.componets cargando!')
  }
  guardarEmail(){
    localStorage.setItem('email', this.emailContact); 
    /*En esta función vamos a guardar  en el localStorage la información que queramos.
    Es como guardar una sesion en el navegador(Esta información se puede consultar desde cualquier componente)*/    
    console.log(localStorage.getItem('email'));
    /*Con getItem podemos consular el valor guardado en el localStorage*/
  }   
}
