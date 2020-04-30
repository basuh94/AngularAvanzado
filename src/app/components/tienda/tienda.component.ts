import { Component, OnInit, DoCheck } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public title:string;
  public nombreDelParque:string
  public miParque:any
  public dueno:string;
  
  constructor() { 
    this.title = 'Esta es la tienda';
    this.nombreDelParque="";
    this.dueno = "Basuh94";

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
}
