import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import axios from 'axios';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
    form: FormGroup;
    errorMessage : string = '';

  constructor(private fb: FormBuilder,private router:Router, private authService: AuthService)
  {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  async onSubmit(){
    
    if(this.form.valid)
      {
        try{
          const res=await axios.post('http://localhost:5000/api/users/register',this.form.value)
          this.authService.register();
          sessionStorage.setItem('flag','true')
          this.router.navigate(['/dashboard'])
        }catch(error : any){
          console.log(error.response.data.msg)
          this.errorMessage = error.response.data.msg;
        }
      }
      
  }
  togglePasswordVisibility() {
    console.log("Hello");
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    console.log(passwordInput);
    
    if(passwordInput)
      {
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
      }
  }
}
