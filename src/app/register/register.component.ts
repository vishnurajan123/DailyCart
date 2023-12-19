import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){}

  register(){
    if(this.registerForm.valid){
      const username=this.registerForm.value.username
      const password=this.registerForm.value.password
      const email=this.registerForm.value.email
      const user={username,password,email}
      this.api.registerAPI(user).subscribe({
        next:(res:any)=>{
          alert(`${res.username} registered successfully`)
          this.registerForm.reset()
          this.router.navigateByUrl('user/login')
        },
        error:(data:any)=>{
          alert(data.error)
          this.registerForm.reset()
        }
      })


    }
    else{
      alert("Invalid form")
    }
  }
}
