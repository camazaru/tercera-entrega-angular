import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { UserService } from '../../services/user/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  formLogin: FormGroup;
  
  constructor(
    private userService: UserService,
    private router: Router
    ) {
      this.formLogin= new FormGroup({
        email: new FormControl(),
        password: new FormControl()
     })
    }

  ngOnInit(): void {
  }

  onSubmit() {

  
    this.userService.login(this.formLogin.value)
    
      .then(response => {
        console.log(response);
        this.router.navigate(['/estudiantes/listar']);

      })
      .catch(() => this.router.navigate(['/auth/register']));
      
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(error => console.log(error)
      )
      
  }

}