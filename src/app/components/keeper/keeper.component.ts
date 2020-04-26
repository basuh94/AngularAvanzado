import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css']
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
