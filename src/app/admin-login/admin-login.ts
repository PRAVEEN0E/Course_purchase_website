import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
  standalone:true
})
export class AdminLogin {
   loginform=new FormGroup({
      admin:new FormControl(''),
      password:new FormControl('')
   })
   show=false
   hide=false
   constructor(private router:Router){}
   login(){
      const {admin,password}=this.loginform.value;
      
      if(admin==="Praveen"&& password==="qwertyuiop"){
            this.show=true
            setTimeout(()=>{
                this.router.navigate(['/admin'])
            },2000)
            
            
      }
      else{
        this.hide=true;
        setTimeout(()=>{
          this.hide=false
        },2000)

        console.log("wrong password")
      }
      this.loginform.reset()
   }
}
