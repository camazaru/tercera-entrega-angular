import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ListarComponent } from './listar/listar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ListarComponent,
    ModificarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
