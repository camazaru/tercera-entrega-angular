import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { EstudiantesService } from '../../../services/estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formAdd: FormGroup;
  EstudiantesService: any;
  constructor(
    private estudiantesService: EstudiantesService,
    private router: Router
    ) {
      this.formAdd= new FormGroup({
        nombre: new FormControl(),
        correo: new FormControl(),
        imagen: new FormControl(),
        activo: new FormControl(),
     })
    }

  ngOnInit(): void {
  }

 public add(){
this.EstudiantesService.post(`https://63c8613c075b3f3a91dfe65f.mockapi.io/users`, 
this.formAdd.value
)

 }

  

}