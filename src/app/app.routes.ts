import { Routes } from '@angular/router';
import { LoginComponent } from './auth-componnent/login/login.component';
import { SignupComponent } from './auth-componnent/signup/signup.component';
import { DemandeComponent } from './modules/employe/demande/demande.component';

export const routes: Routes = [
  {path:'employe',loadChildren:()=>import('./modules/employe/employe.module').then(emp=>emp.EmployeModule)},
  {path:'responsable',loadChildren:()=>import('./modules/responsable/responsable.module').then(res=>res.ResponsableModule)},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];
