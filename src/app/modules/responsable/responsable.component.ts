import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../employe/topbar/topbar.component';
import { SibarRespoComponent } from './sibar-respo/sibar-respo.component';

@Component({
  selector: 'app-responsable',
  standalone: true,
  imports: [TopbarComponent,SibarRespoComponent,RouterOutlet],
  templateUrl: './responsable.component.html',
  styleUrl: './responsable.component.css'
})
export class ResponsableComponent {

}
