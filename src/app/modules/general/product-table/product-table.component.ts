import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.sass'],
})
export class ProductTableComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productApi: ProductApiService) {}

  ngOnInit(): void {
    this.productApi.listProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.info(this.products);
      },
      error: (error) => {
        console.info(error);
        alert('Error al consultar productos');
      },
    });
  }
}
