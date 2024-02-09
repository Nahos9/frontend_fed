import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
 



  ngOnInit(){
   
  }

  

}
