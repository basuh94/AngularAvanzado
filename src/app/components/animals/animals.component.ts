import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation'

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  public title:string;
  constructor() {
    this.title = "Animales";
   }

  ngOnInit() {
    console.log('animal.components cargado');
  }

}
