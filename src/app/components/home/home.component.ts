import { Component, OnInit } from '@angular/core';
import { Fundido } from '../animation'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [Fundido]
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
