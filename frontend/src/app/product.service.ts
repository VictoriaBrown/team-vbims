import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private productsUrl = 'http://localhost:8000/products';

  constructor(private http:  HttpClient) { }


  getProducts() {
    return this.http.get(`${this.productsUrl}`);
  }

  getProductById(id) {
    return this.http.get(`${this.productsUrl}/products/${id}`);
  }

  addProduct(name, description, numberInStock, cost, supplier){
    const product = {
      name: name,
      description: description,
      numberInStock: numberInStock,
      cost: cost,
      supplier: supplier,
     
    };
    return this.http.post(`${this.productsUrl}/products/add`, product);
  }
  updateProduct(id, name, description, numberInStock, cost, supplier, status) {
    const product = {
      name: name,
      description: description,
      numberInStock: numberInStock,
      cost: cost,
      supplier: supplier,
      status: status
    };
    return this.http.post(`${this.productsUrl}/products/update/${id}`, product);
}
  deleteProduct(id) {
    return this.http.get(`${this.productsUrl}/products/delete/${id}`);
  }
}  
