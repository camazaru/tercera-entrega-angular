import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ModificarComponent } from './pages/modificar/modificar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [

  { path: 'agregar', component: AgregarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
  { path: 'modificar', component: ModificarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
  { path: 'listar', component: ListarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
  { path: 'buscar', component: BuscarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
  { path: 'eliminar', component: EliminarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
  
  { path: '**', component: ListarComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EstudiantesRoutingModule { }

