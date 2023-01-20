import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from './layout/layout.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { PublicModule } from './public/public.module';
import { AuthModule } from './auth/auth.module';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    EstudiantesModule,
    PublicModule,
    AuthModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
