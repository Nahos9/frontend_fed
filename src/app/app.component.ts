import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from './services/auth-service/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from './auth-componnent/login/login.component';
import { SignupComponent } from './auth-componnent/signup/signup.component';


@Component({
  selector: 'app-root',
  standalone: true,
  providers: [AuthServiceService],
  imports: [RouterLink,RouterOutlet,HttpClientModule,ReactiveFormsModule,LoginComponent,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'fed_frontend';

  toast = inject(ToastrService)

 
  signForm!: FormGroup
  constructor(private fb:FormBuilder,private authService:AuthServiceService){
    
  }
  ngOnInit(){
    this.signForm = this.fb.group({
      name: ["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      checkPassword:["",[Validators.required]]
    }) 
  }

  register(){
    this.authService.signup(this.signForm.value).subscribe({
      next : res =>{
       if(res.user_id != null){
        this.toast.success("Inscrition réussie!!")
        this.signForm.reset()
       }
      },
      error : error=>{
        this.toast.error(error)
      }
    })
  }
 
 
}
