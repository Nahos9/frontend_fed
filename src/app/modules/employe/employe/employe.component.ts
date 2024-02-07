import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employe',
  standalone: true,
  imports: [SidebarComponent,TopbarComponent,RouterOutlet],
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css'
})
export class EmployeComponent {

}
