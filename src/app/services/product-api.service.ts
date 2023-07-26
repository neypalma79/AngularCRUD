import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { ProductResponse } from '../models/product-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  private urlBase: string = 'http://localhost:9001/angularapi/api/v1';
  private pathProducts: string = '/products';
  private httpHeaders: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    this.httpHeaders = this.httpHeaders.append(
      'Content-Type',
      'application/json'
    );
  }

  public listProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.urlBase + this.pathProducts, {
      headers: this.httpHeaders,
    });
  }

  public saveProduct(product: Product): Observable<ProductResponse> {
    return this.httpClient.post<ProductResponse>(
      this.urlBase + this.pathProducts,
      product,
      { headers: this.httpHeaders }
    );
  }
}
