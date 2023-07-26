import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductApiService } from 'src/app/services/product-api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.sass'],
  providers: [MessageService],
})
export class ProductTableComponent implements OnInit, OnDestroy {
  public products: Product[] = [];

  constructor(
    private productApi: ProductApiService,
    private messageService: MessageService
  ) {}

  ngOnDestroy(): void {
    console.info('componente desmontando o destruido');
  }

  ngOnInit(): void {
    this.productApi.listProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.info(this.products);
      },
      error: (error) => {
        console.info(error);
        this.messageService.add({
          summary: 'Productos',
          detail: 'Error al consultar el listado de productos',
          severity: 'error',
        });
      },
    });
  }
}
