import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

//Importarmos los componentes de nuestro modulo
import { MainComponent } from "./components/main/main.component";
import { AddComponent } from "./components/add/add.component";
import { ListComponent } from "./components/list/list.component"; 
import { EditComponent } from "./components/edit/edit.component";

// Crear Ruta principal con sus rutas hijas (dominio.es/admin-panel/listado)
const adminRoutes: Routes = [
    {
        path:'admin-panel',
        component: MainComponent,
        children: [
            { path: '', redirectTo:'listado', pathMatch: 'full' },
            { path: 'listado', component: ListComponent },
            { path: 'crear', component: AddComponent },
            { path: 'editar', component: EditComponent }  
        ]
    },
    { path: 'listado-panel', component: ListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule{

}