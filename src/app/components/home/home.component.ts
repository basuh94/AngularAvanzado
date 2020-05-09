import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn] // Declaramos la animacion Fundido que hemos creado en el archivo animation.ts
})

export class HomeComponent implements OnInit {
  public title:string;
  constructor() { 
    this.title = "Home";
  }

  ngOnInit() {
    console.log('home.component cargado!!!!');
  }

}
