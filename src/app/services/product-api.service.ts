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

  public deleteProduct(id: number): Observable<ProductResponse> {
    return this.httpClient.delete<ProductResponse>(
      `${this.urlBase}${this.pathProducts}/${id}`,
      { headers: this.httpHeaders }
    );
  }

  public listProductById(id: number): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(
      `${this.urlBase}${this.pathProducts}/${id}`,
      { headers: this.httpHeaders }
    );
  }

  public updateProduct(product: Product): Observable<ProductResponse> {
    return this.httpClient.put<ProductResponse>(
      this.urlBase + this.pathProducts,
      product,
      { headers: this.httpHeaders }
    );
  }
}
