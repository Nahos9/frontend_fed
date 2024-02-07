import { Component, Inject, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service/auth-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  authService = inject(AuthServiceService)
  signForm!:FormGroup
  toast = inject(ToastrService)
constructor(private fb: FormBuilder,private router:Router){

}
  ngOnInit(){
    this.signForm = this.fb.group({
      nom: ["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    }) 
  }

  register(){
    this.authService.signup(this.signForm.value).subscribe({
      next:data=>{
        console.log("data",data)
        this.toast.success("Inscription réussie","Success")
        this.router.navigateByUrl("/login")
      },error:error=>{
        console.log("erreur",error)
      }
    })
  }
}
