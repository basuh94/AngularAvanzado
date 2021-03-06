import { Component, OnInit, DoCheck } from '@angular/core';
import {trigger, state, style, transition, animate} from "@angular/animations";
import { fadeIn } from '../animation'

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations:[
     trigger('marcar',[
       state('inactive', style({
            border: '5px solid #ccc'
       })),
       state('active', style({
         border: '5px solid yellow',
         background: 'red',
         borderRadius: '50px',
         transform: 'scale(1.2)'
       })),
       transition('inactive => active', animate('300ms linear')),
       transition('active => inactive', animate('300ms linear'))
     ]),
     fadeIn
  ]
})

export class TiendaComponent implements OnInit {
  public title:string;
  public nombreDelParque:string
  public miParque:any
  public dueno:string;
  public status;
  
  constructor() { 
    this.title = 'Esta es la tienda';
    this.nombreDelParque="";
    this.dueno = "Basuh94";
    this.status = "inactive";

  }

  ngOnInit() {
    $('#mostrarJQ').hide();
    $('#botonJQ').click(function(){
        console.log('Click desde jQuery');
        $('#mostrarJQ').slideToggle();
        $("#box").dotdotdot({}); /* dotdotdot es una libreria de jQuery importada para poner puntos 
                                  suspensivos cuando es texto es mas grande que la caja */
    });
    
  }

  mostrarNombre(){
    console.log(this.nombreDelParque);
  }

  verDatosParque(event){
    console.log(event)
    this.miParque = event
  }

  CambiarEstado(){

    if(this.status == "inactive"){
      this.status = "active";
    }else{
      this.status = "inactive";
    }
    
  }

  
}
