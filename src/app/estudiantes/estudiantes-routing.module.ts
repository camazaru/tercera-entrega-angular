import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ModificarComponent } from './pages/modificar/modificar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';

const routes: Routes = [

  { path: 'agregar', component: AgregarComponent },
  { path: 'modificar', component: ModificarComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'eliminar', component: EliminarComponent },
  { path: '**', component: ListarComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
