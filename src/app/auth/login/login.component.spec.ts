import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service';





xdescribe(`(1) TEST del componente 'LoginComponent'`, () => {
  let Component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async  () => {
      TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,  
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        CommonModule,
        
        
       
      ],
      declarations: [ 
        LoginComponent,
        
       
               ],
               providers: [FormBuilder,{ provide: LoginComponent, UserService, useValue: {} },
      ]    
    })
    .compileComponents();

    });

    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      Component = fixture.componentInstance;
      Component.ngOnInit();
      fixture.detectChanges();
    });



  it('Retornar formulario valido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const Component = fixture.componentInstance;
    fixture.detectChanges();

let email = Component.formLogin.controls['email']
email.setValue('cmzruiz@gmail.com')
let password = Component.formLogin.controls['password']
password.setValue('123456')

expect(Component.formLogin.invalid).toBeTruthy();

  });
});
