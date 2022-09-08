import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-demo',
  templateUrl: './reactive-form-approach.html'
 
})
export class ReactiveDemoApproach implements OnInit{

   personForm!:FormGroup 

    //  ngOnInit(): void {
//         this.personForm = new FormGroup({  // use instance of the form group to fill the fprm control 
         
//             Fname:new FormControl(),  
//             Lname:new FormControl(),
//             Email:new FormControl(),
//             CreatePassword:new FormControl(),
//             ConfirmPassword:new FormControl(),

            

//         });
    //  }
    submit(){
        console.log(this.personForm);
        console.log(this.personForm.value);
    }
        Upload(){
        // this.personForm.setValue({
        //     Fname:'Rajat',
        //     Lname:'Singh',
        //     Email:'rajatkshatriya38@gmail.com',
        //     CreatePassword:'Rajat@9125',
        //     //ConfirmPassword:'Rajat@9125'
        // })
        // 
        this.personForm.patchValue({
            Fname:'Rajat',
            Lname:'Singh',
            Email:'rajatkshatriya38@gmail.com',
            CreatePassword:'Rajat@9125',
            ConfirmPassword:'Rajat@9125'
        
        
        })
     }

   // 2nd way to implement that above functionality through FormBuilder because minimize the line of code 

   constructor( private _formBuilder:FormBuilder){

}
   ngOnInit(): void {

    this.personForm=this._formBuilder.group({
                    Fname: ['',Validators.required],
                    Lname:['',Validators.required],
                    Email:['',Validators.required],
                    CreatePassword:['',Validators.required],
                    ConfirmPassword:['',Validators.required]
    })
   }
}
