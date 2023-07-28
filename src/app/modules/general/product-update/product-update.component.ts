import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product.interface';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.sass'],
  providers: [MessageService],
})
export class ProductUpdateComponent {
  public id: number = 0;
  public product: Product = {
    id: 0,
    name: '',
    brand: '',
    description: '',
    unitPrice: 0,
    quantity: 0,
    status: 'A',
  };
  public updateData: boolean = false;

  constructor(
    private messageService: MessageService,
    private productApi: ProductApiService
  ) {}

  public findProductById(): void {
    this.productApi.listProductById(this.id).subscribe({
      next: (response) => {
        if (response.code === '00') {
          this.product = JSON.parse(response.data);
          this.updateData = true;
          console.info(this.product.name);
        }

        if (response.code === '99') {
          this.messageService.add({
            summary: 'Producto',
            detail: response.data,
            severity: 'error',
          });

          this.product = {
            id: 0,
            name: '',
            brand: '',
            description: '',
            unitPrice: 0,
            quantity: 0,
            status: 'A',
          };
          this.updateData = false;
        }
      },
      error: (error) => {
        console.info(error);
        this.product = {
          id: 0,
          name: '',
          brand: '',
          description: '',
          unitPrice: 0,
          quantity: 0,
          status: 'A',
        };
        this.updateData = false;
      },
    });
  }

  public updateProduct(): void {
    this.product.status = this.product.status.toUpperCase();
    this.productApi.updateProduct(this.product).subscribe({
      next: (response) => {
        if (response.code === '00') {
          this.messageService.add({
            summary: 'Producto',
            detail: response.data,
            severity: 'success',
          });
        }

        if (response.code === '99') {
          this.messageService.add({
            summary: 'Producto',
            detail: response.data,
            severity: 'error',
          });
        }
      },
      error: (error) => {
        this.messageService.add({
          summary: 'Producto',
          detail: 'Error en el servicio de productos',
          severity: 'error',
        });
      },
    });
  }
}
