import { Component,DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  public title:string;
  public emailContact:string;
  constructor(){
    this.title = 'NGZOO'
  }
  ngOnInit(){
    this.emailContact = localStorage.getItem('email');
  }
  ngDoCheck(){
    console.log('El DoCheck se ha ejecutado');
    this.emailContact = localStorage.getItem('email');
  }

  elimarEmailLocalStorage(){
    localStorage.removeItem('email');
    localStorage.clear(); //Nos elimina todo el LocaStorage
  }
}

