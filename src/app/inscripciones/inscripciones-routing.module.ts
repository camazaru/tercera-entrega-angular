import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
  { path: 'listar', component: ListarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
  { path: 'editar/:id', component: EditarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
  { path: 'eliminar/:id', component: EditarComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
  
  { path: '**', component: ListarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
