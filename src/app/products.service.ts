
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri  = 'http://localhost:8000/products';
  urii = 'http://localhost:8000/getToken';
  private _token: any;
  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {

    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice,
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getCurrentToken() {
    return this
     .http
     .get(`${this.urii}`);
  }
  getProducts() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editProduct(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
     const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
       };

     this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

}
