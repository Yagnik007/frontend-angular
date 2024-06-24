import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import axios from 'axios';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  data: any;

  istrue:boolean=false
  constructor(private authservice:AuthService,private route:Router){
    if(sessionStorage.getItem('flag')){
      this.istrue=true;
    }
  }
  ngOnInit(): void {
   this.fetchData()
  }

  fetchData(): void {
    axios.get('http://localhost:5000/api/user')
      .then(response => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch(error => {
        console.error('There was an error making the request:', error);
      });
  }

  logout(){
    this.istrue = false;
    this.authservice.logout();
    sessionStorage.removeItem('flag')
    this.route.navigate(['/login'])
  }
}
