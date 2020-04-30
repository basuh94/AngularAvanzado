import { Component,DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string;
  public emailContact:string;
  
  constructor(){
    this.title = 'NGZOO'
  }

}

