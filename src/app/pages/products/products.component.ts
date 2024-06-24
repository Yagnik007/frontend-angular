import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule]  // Ensure HttpClientModule is imported here if using standalone
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/api/products/').subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }
}
