import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { UserService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  formEliminar: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router
    ) {
      this.formEliminar= new FormGroup({
        id: new FormControl(),
        correo: new FormControl(),
        imagen: new FormControl(),
        activo: new FormControl(),
     })
    }

  ngOnInit(): void {
  }

  eliminar (){

  console.log(this.formEliminar.value)
 }

  

}