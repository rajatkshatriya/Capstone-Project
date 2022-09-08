import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './create-register.html',
  styleUrls: ['./create-register.css']
})
export class SignupComponent {
    fullname:string="";
    email:string="";
    
    saveData(form:NgForm){
        console.log(form);
        console.log(form.value);
       }
  
}

 