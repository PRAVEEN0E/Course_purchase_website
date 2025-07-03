import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafePipe } from '../safe-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [SafePipe, CommonModule],
  templateUrl: './view.html',
  styleUrl: './view.css'
})
export class View implements OnInit {
  id: number = 0;
  selectedCourse: any;
data = [
  {
    id: 1,
    name: "HTML",
    img: "assets/images.jpg",
    price: 159,
    url: "https://www.youtube.com/embed/916GWv2Qs08",
    video:"assets/cheatsheet/HTML_CheatSheet.pdf",
    description: "This course introduces HTML (HyperText Markup Language), the backbone of all web pages. You'll learn to structure content with headings, paragraphs, images, links, forms, tables, and semantic tags. By the end, you'll be able to build a clean and structured web page layout from scratch."
  },
  {
    id: 2,
    name: "CSS",
    img: "assets/hero.png",
    price: 200,
    video:"assets/cheatsheet/CSS_CheatSheet.pdf",
    url: "https://www.youtube.com/embed/D1RHBY0unzA",
    description: "In this CSS course, you’ll learn how to style web pages beautifully using color, fonts, spacing, and advanced layouts like Flexbox and Grid. It also covers media queries to make your design responsive across devices."
  },
  {
    id: 3,
    name: "BOOTSTRAP",
    img: "assets/Bootstrap.jpg",
    video:"assets/cheatsheet/Bootstrap_CheatSheet.pdf",
    price: 299,
    url: "https://www.youtube.com/embed/-qfEOE4vtxE",
    description: "Learn to create modern and responsive websites using Bootstrap, the most popular CSS framework. You’ll master components like navbar, carousel, modals, cards, buttons, and the 12-column grid system to build mobile-first websites."
  },
  {
    id: 4,
    name: "JAVASCRIPT",
    img: "assets/js.jpg",
    price: 399,
    video:"assets/cheatsheet/JavaScript_CheatSheet.pdf",
    url: "https://www.youtube.com/embed/PkZNo7MFNFg",
    description: "This JavaScript course takes you from beginner to intermediate level. Learn variables, functions, loops, arrays, objects, DOM manipulation, events, and ES6 features like arrow functions, template strings, and destructuring. Build interactive websites with confidence."
  },
  {
    id: 5,
    name: "REACT JS",
    img: "assets/reactimg.jpg",
    price: 500,
     video:"assets/cheatsheet/HTML_CheatSheet.pdf",
    url: "https://www.youtube.com/embed/bMknfKXIFA8",
    description: "React.js is a powerful JavaScript library for building user interfaces. In this course, you'll learn about JSX, components, props, state, hooks, and routing. You'll build reusable UI components and single-page applications (SPAs) with ease."
  },
  {
    id: 6,
    name: "ANGULAR",
    img: "assets/angular.jpg",
    price: 500,
     video:"assets/cheatsheet/Angular_CheatSheet.pdf",
    url: "https://www.youtube.com/embed/2OHbjep_WjQ",
    description: "Master Angular, a powerful TypeScript-based framework used for building scalable enterprise-level applications. Learn components, services, directives, dependency injection, pipes, routing, forms, and RxJS observables."
  },
  {
    id: 7,
    name: "NODE JS",
    img: "assets/node.jpg",
    price: 700,
     video:"assets/cheatsheet/Nodejs_CheatSheet.pdf",
    url: "https://www.youtube.com/embed/TlB_eWDSMt4",
    description: "Node.js allows you to build fast and scalable server-side applications. This course covers core Node modules, event-driven architecture, file system access, creating HTTP servers, and building APIs using Express.js."
  },
  {
    id: 8,
    name: "FULLSTACK",
    img: "assets/fullstack.jpg",
    price: 999,
     video:"assets/cheatsheet/FullStack_CheatSheet.pdf",
    url: "https://www.youtube.com/embed/nu_pCVPKzTk",
    description: "Become a full-stack developer by mastering both frontend and backend development. This course covers HTML, CSS, JavaScript, React/Angular for frontend, Node.js, Express for backend, and MongoDB/MySQL for databases. Build complete web apps end-to-end."
  },
  {
    id: 9,
    name: "NEXT JS",
    img: "assets/next.jpg",
    price: 599,
    video:"assets/cheatsheet/Nextjs_CheatSheet.pdf",
    url: "https://www.youtube.com/embed/1WmNXEVia8I",
    description: "Next.js is a React framework for building high-performance web applications with server-side rendering (SSR), static site generation (SSG), and built-in routing. Learn to optimize SEO, improve performance, and deploy modern web apps."
  },
  {
    id: 10,
    name: "MONGO DB",
    img: "assets/mangodb.jpg",
    price: 499,
     video:"assets/cheatsheet/MongoDB_CheatSheet.pdf",
    url: "https://www.youtube.com/embed/fgdpvwEWJ9M",
    description: "This course covers MongoDB, a powerful NoSQL database. Learn to store, query, update, and manage data using Mongo shell and Compass. Understand schemas, collections, aggregation pipelines, and integration with Node.js."
  },
  {
    id: 11,
    name: "EXPRESS JS",
    img: "assets/expjs.jpg",
    price: 499,
     video:"assets/cheatsheet/Expressjs_CheatSheet.pdf",
    url: "https://www.youtube.com/embed/Oe421EPjeBE",
    description: "Express.js is a fast, minimalist web framework for Node.js. Learn to create APIs, handle routes, use middleware, manage request/response, and build RESTful services with authentication and error handling."
  },
  {
    id: 12,
    name: "MYSQL",
    img: "assets/mysql.jpg",
    price: 399,
    video:"assets/cheatsheet/MySQL_CheatSheet.pdf",
    url: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "Learn SQL and MySQL database management. Write queries to insert, update, delete, and retrieve data. Understand table relationships, joins, constraints, indexes, and basic database design principles."
  }
];


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
     localStorage.setItem("a", String(true)); 
    const routeId = this.route.snapshot.paramMap.get('id');
    this.id = routeId ? parseInt(routeId, 10) : 0;
    this.selectedCourse = this.data.find(item => item.id === this.id);
  }
}
