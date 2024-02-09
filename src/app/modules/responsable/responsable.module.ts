import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResponsableComponent } from './responsable.component';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';
import { DemandeResponsableComponent } from './demande-responsable/demande-responsable.component';

const routes:Routes = [
  {path:'',component:ResponsableComponent,children:[
    {path:'',component:DashboardResponsableComponent},
    {path:'demandes',component:DemandeResponsableComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ResponsableModule { }
