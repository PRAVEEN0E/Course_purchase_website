import { CommonModule } from '@angular/common';
import { Component, Pipe,PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home  {
   time=new Date()
   constructor(private router:Router){}
   joinnow(){
    this.router.navigate(['/course'])
   }
   
}
