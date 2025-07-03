import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Aboutus } from './aboutus/aboutus';
import { Home } from './home/home';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'Course';
  currentYear = new Date().getFullYear();
  username = '';
  constructor(private router:Router){}
 user = JSON.parse(localStorage.getItem('currentuser') || '{}');
  dis=localStorage.getItem("a")
  ngOnInit(): void {
     
    this.username =this.user.user || ''; 
    console.log(this.dis)
  }
  logout(){
      localStorage.removeItem('currentuser');
      this.router.navigate(['/login'])
  }

}
