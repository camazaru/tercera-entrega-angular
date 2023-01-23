import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formReg: FormGroup;
  

  constructor(private userService: UserService,
    private router: Router) {
    this.formReg= new FormGroup({
      email: new FormControl(),
      password: new FormControl()
      
          })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/auth/login'])
      })
      .catch(error => console.log(error));
  }

}