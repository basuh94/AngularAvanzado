import { Component,DoCheck, OnInit } from '@angular/core';


@Component({
  selector: 'guardar-email',
  templateUrl: './guardar-email.component.html',
 
})

  export class GuardarEmailComponent  {
        public title:string;
        public emailContact:string;
        
        constructor(){
            this.title = 'Guardar Email';
        }
  
        guardarEmail(){
            localStorage.setItem('email',this.emailContact);
        }

  }