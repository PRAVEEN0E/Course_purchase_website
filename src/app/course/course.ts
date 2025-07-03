import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course {
data=[{ id:1,
      name: "HTML",
      img: "assets/images.jpg",
      price: 159,
      url:"https://www.youtube.com/embed/916GWv2Qs08?si=QY59CB2i8HMP-Vb"
    },
    {
       id:2,
      name: "CSS",
      img: "assets/hero.png",
      price: 200
    },
    {
       id:3,
      name: "BOOTSTRAP",
      img: "assets/Bootstrap.jpg",
      price: 299
    },
    { id:4,
      name: "JAVASCRIPT",
      img: "assets/js.jpg",
      price: 399
    },
    {  id:5,
      name: "REACT JS",
      img: "assets/reactimg.jpg",
      price: 500
    },
    {  id:6,
      name: "ANGULAR",
      img: "assets/angular.jpg",
      price: 500
    },
    { id:7,
      name: "NODE JS",
      img: "assets/node.jpg",
      price: 700
    },
    { id:8,
      name: "FULLSTACK",
      img: "assets/fullstack.jpg",
      price: 999
    },
    {  id:9,
      name: "NEXT JS",
      img: "assets/next.jpg",
      price: 599
    },
    {  id:10,
      name: "MONGO DB",
      img: "assets/mangodb.jpg",
      price: 499
    },
    {  id:11,
      name: "EXPRESS JS",
      img: "assets/expjs.jpg",
      price: 499
    },
    {  id:12,
      name: "MYSQL",
      img: "assets/mysql.jpg",
      price: 399
    }
  ]
  constructor(private router:Router){}

view(id:number){
    this.router.navigate(['/view',id])
}
}
