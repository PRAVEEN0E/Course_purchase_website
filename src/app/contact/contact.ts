import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact  {

  contact=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      message:new FormControl('')


  })
  submited:any;
  done=false
  onsubmit() {
  this.submited = this.contact.value;

  
  let oldData = [];

  
  const saved = JSON.parse(localStorage.getItem('userdata') || '[]');
  oldData = Array.isArray(saved) ? saved : [];
 

  oldData.push(this.submited);
 this.done=true
 setTimeout(()=>{
  this.done=false
 },2000)
  localStorage.setItem('userdata', JSON.stringify(oldData));

  this.contact.reset();
  
}


}


  


