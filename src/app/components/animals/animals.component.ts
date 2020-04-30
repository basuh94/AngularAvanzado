import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
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