import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit { 

  formPut: FormGroup;

  EstudiantesService: any;
  
  constructor(
    private estudiantesService: EstudiantesService,
    private router: Router
    ) {
      this.formPut= new FormGroup({
        nombre: new FormControl(),
        correo: new FormControl(),
        imagen: new FormControl(),
        activo: new FormControl(),
     })
    }

  ngOnInit(): void {
  }

  putForm(form: any){
  this.estudiantesService.putEstudiante(form).subscribe(data => {
    console.log(data)
  })

  }

  salir(){
    this.router.navigate(['home']);
  }

editarEstudiante(id: any){
  this.router.navigate(['modificar', id])
}


nuevoEstudiante(){
  this.router.navigate(['nuevo'])
}


}