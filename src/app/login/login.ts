import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  dis=false
  ngOnInit(): void {
    
  if (!localStorage.getItem('reloaded')) {
    localStorage.setItem('reloaded', 'true');
    window.location.reload();
    
  } else {
    localStorage.removeItem('reloaded');
  }
}

  loginform = new FormGroup({
    admin: new FormControl(''),
    password: new FormControl('')
  });
  hide:boolean=false
  show:boolean=false
constructor(private router:Router){};
  login() {
    
    const enteredData = this.loginform.value;
     
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const matchedUser = users.find((u: any) =>
      u.user === enteredData.admin && u.password === enteredData.password
    );

    if (matchedUser) {
      localStorage.setItem('currentuser', JSON.stringify(matchedUser));
      
      this.show=true
  setTimeout(()=>{
       this.router.navigate(['/home']);
  },2000)    
      
    } else {
      
      this.hide=true
      setTimeout(()=>{
           this.hide=false
      },2000       )
    }
  }
}

