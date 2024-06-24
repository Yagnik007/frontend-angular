import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:5000/api/cart';

  constructor(private http: HttpClient) {}

  addToCart(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, product);
  }
}
