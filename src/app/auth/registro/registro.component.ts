import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formReg: FormGroup;

  constructor() {
    this.formReg= new FormGroup({
      usuario: new FormControl(),
      password: new FormControl()
      
          })
  }

  ngOnInit(): void {
  }

  onSubmit() {
  }
}
