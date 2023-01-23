import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { UserService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit { formModificar: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
    ) {
      this.formModificar= new FormGroup({
        id: new FormControl(),
        correo: new FormControl(),
        imagen: new FormControl(),
        activo: new FormControl(),
     })
    }

  ngOnInit(): void {
  }

  modificar (){

  console.log(this.formModificar.value)
 }

  

}