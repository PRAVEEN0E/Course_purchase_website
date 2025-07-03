import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {
     data=[{
      name:'Kavin',
      role:'Founder',
      img:"aboutus/img1.jpg"
     },
     {
      name:'Vishnu Sabari',
      role:'Co-Founder',
      img:'aboutus/img3.jpg'
     },
     {
      name:'Giri',
      role:'CEO',
      img:'aboutus/img2.jpg'
     },
     {
      name:'Venkat',
      role:'Chairman',
      img:'aboutus/img4.jpg'
     }
    ]
}
