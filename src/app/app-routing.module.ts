import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Componentes 
import {TiendaComponent} from './components/tienda/tienda.component'
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}, // Redirecciona si esta vacio
  {path:'tienda', component:TiendaComponent},
  {path:'home', component:HomeComponent},
  {path:'animals', component:AnimalsComponent},
  {path:'contact', component:ContactComponent},
  {path:'keeper', component:KeeperComponent},
  {path:'**', component:HomeComponent}  // Carga la url de Tienda si la ruta no es correcta 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
