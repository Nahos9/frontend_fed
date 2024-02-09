import { Component, inject } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  router = inject(Router)

  logout(){
    StorageService.logout()
    this.router.navigateByUrl("/login")
  }
}
