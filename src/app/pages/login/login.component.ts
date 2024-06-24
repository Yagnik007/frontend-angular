import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  form: FormGroup;
  errorMessage : string = '';

  constructor(private fb: FormBuilder, private router: Router,private auth:AuthService)
  {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  async onSubmit(){
    if(this.form.valid)
      {
        try{
          const res=await axios.post('http://localhost:5000/api/users/login',this.form.value)
          console.log("response message is here, ",res)
          this.auth.login();
            sessionStorage.setItem('flag','true')
          this.router.navigate(['/dashboard'])
          // if(!res.status) {
          // }
          
        }catch(error : any){
          console.log(error.response.data.msg)
          this.errorMessage = error.response.data.msg;
        }
      }
  }

    togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }
}
