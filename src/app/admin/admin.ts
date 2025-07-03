import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit {
   data:any;
   user:any;
   ngOnInit(): void {
       this.data= JSON.parse(localStorage.getItem('userdata') || '[]'); 
       this.user=JSON.parse(localStorage.getItem('users') || '[]');
        
   }
}
