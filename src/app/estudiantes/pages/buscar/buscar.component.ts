import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { UserService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  formBuscar: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router
    ) {
      this.formBuscar= new FormGroup({
        id: new FormControl(),
    
     })
    }

  ngOnInit(): void {
  }

 buscar (){

 }

  

}