import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit, OnChanges, OnDestroy {
  @Input() nombre:string; 
  @Input('metros_cuadrados') metros:number; // Con @Input() pasamos datos de un componente padre a un hijo
                                            // Tambien podemos crearle un alias añadiendole @Input('alias') 
  @Input('DuenoTienda') Rdueno:string;
  public vegetacion:string;
  public abierto:boolean;
 

  @Output() pasameLosDatos = new EventEmitter(); //EventEmiter nos permite crear un evento
  

  constructor() { 
      this.nombre = 'Parque natural de caballos';
      this.metros = 450;
      this.vegetacion = 'Alta'; 
      this.abierto = true;
      this.Rdueno="Sin dueño";
  }

  ngOnChanges(SimpleChange){
    console.log(SimpleChange);
    console.log('OnChange');
  }
  ngOnInit() {
    console.log('OnInit');
  }
  ngOnDestroy(){
    console.log('Se va a eliminar el componente');
  }

  emitirEvento(){  //Creamos una función de EventEmitter con sus datosd que queremos enviar 
    this.pasameLosDatos.emit({ 
      'nombre' : this.nombre, 
      'metros' : this.metros, 
      'vegetacion' : this.vegetacion, 
      'abierto': this.abierto,
      'dueño':this.Rdueno
    });

  }
}
