import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { MockamockapiService } from '../../services/mockamockapi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  userList: any = [];

  constructor( private mockamockapiService:MockamockapiService ) 
  
  {     
    this.formLogin= new FormGroup({
      usuario: new FormControl(),
      password: new FormControl()
   })

   this.mockamockapiService.getUsers()
        .subscribe( response => {
          console.log(response)
          this.userList= response
            }             
        )
  }


  ngOnInit(): void {
    
  }

  onSubmit() {

  }

login(){
 

}
  
  

}
