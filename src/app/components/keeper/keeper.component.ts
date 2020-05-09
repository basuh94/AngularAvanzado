import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation'

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  animations: [fadeIn]
})
export class KeeperComponent implements OnInit {
  public title:string;
  constructor() { 
    this.title="Cuidadores";
  }

  ngOnInit() {
    console.log('kepper.componets cargado!');
  }

}
