import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  signupform = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private router:Router){}
  signup() {
    const newUser = this.signupform.value;

   
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));


    this.signupform.reset();
    this.router.navigate(['/login'])
   
  }
}
