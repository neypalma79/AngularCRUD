import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product.interface';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.sass'],
  providers: [MessageService],
})
export class ProductNewComponent {
  public name: string = '';
  public brand: string = '';
  public description: string = '';
  public unitPrice: number = 0;
  public quantity: number = 0;
  private status: string = 'A';

  constructor(
    private messageService: MessageService,
    private productApiService: ProductApiService
  ) {}

  public saveProduct(): void {
    if (
      this.name === '' ||
      this.brand === '' ||
      this.unitPrice === 0 ||
      this.quantity === 0
    ) {
      this.messageService.add({
        summary: 'Producto',
        detail: 'Debe llenar los campos obligatorios',
        severity: 'info',
      });
    } else {
      const product: Product = {
        name: this.name,
        brand: this.brand,
        description: this.description,
        unitPrice: this.unitPrice,
        quantity: this.quantity,
        status: this.status,
      };

      this.productApiService.saveProduct(product).subscribe({
        next: (response) => {
          console.info(response);

          if (response.code === '00') {
            this.messageService.add({
              summary: 'Producto',
              detail: response.data,
              severity: 'success',
            });
          }

          if (response.code === '21') {
            this.messageService.add({
              summary: 'Producto',
              detail: response.data,
              severity: 'info',
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
          console.info(error);

          this.messageService.add({
            summary: 'Producto',
            detail: 'Error al grabar producto',
            severity: 'error',
          });
        },
      });
    }
  }
}
