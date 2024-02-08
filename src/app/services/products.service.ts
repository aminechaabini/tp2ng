import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://dummyjson.com/products';
  private limit= 12;
  private skip = 0;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]>{
    const url = '${this.url}?limit=${this.limit}&skip=${this.skip}}'
    return this.http.get<any[]>(url).pipe(
        map((data) => data.products);
  }

  getMoreProducts(): Observable<any[]>{
    this.skip+=this.limit;
    return this.getProducts();
  }
}
