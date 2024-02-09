import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

 

  loginForm!:FormGroup
  fb = inject(FormBuilder)
  authService = inject(AuthServiceService)
  toast = inject(ToastrService)
  router = inject(Router)
  storageService = inject(StorageService)
  ngOnInit() {
   this.loginForm = this.fb.group(
    {
      username:["",Validators.required],
      password:["",Validators.required]
  }
   )
  }

  signin(){
    this.authService.signin(this.loginForm.value)
    .subscribe({
      next:data =>{
        if(data.jwt != null){
          if(data.user_id != null || data.user_id != undefined){
            let user = {
              user_id: data.user_id,
              user_role: data.role_user
            }

            StorageService.saveToken(data.jwt)
            StorageService.saveUser(user)
          }
          this.toast.success("Connexion réussie!!","Success")     
          setTimeout(()=>{
            this.router.navigateByUrl("/employe")
          },1000)
        }
     
      },error:error=>{
        this.toast.error("Email ou mot de passe inccorrect!!")
      }
    })
  }
}
