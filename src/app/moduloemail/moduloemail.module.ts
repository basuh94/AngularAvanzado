//Importar modulo necesarios para crear modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

//Importamos los componentes
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component'; 
import { MainEmailComponent } from './components/main-email/main-email.component';

//Decorador ngModule para cargar los componentes y la configuracion de los modulos

@NgModule({
    imports:[CommonModule, FormsModule],
    
    declarations:[ // Declaramos nuestros componetes que van a pertenecer al modulo
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent

    ],

    exports: [MainEmailComponent] //En exports le indicamos cual va a ser el componente principal
})

export class ModuloEmailModule{}