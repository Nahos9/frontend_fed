import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { DemandeComponent } from './demande/demande.component';
import { DashboardEmployeComponent } from './dashboard-employe/dashboard-employe.component';


const routes:Routes = [
  {path:'',component:EmployeComponent,children:[
    {path:'',component:DashboardEmployeComponent},
    {path:'demandes',component:DemandeComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class EmployeModule { }
