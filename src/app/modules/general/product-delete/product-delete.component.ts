import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.sass'],
  providers: [MessageService],
})
export class ProductDeleteComponent {
  public id: number = 0;

  constructor(
    private messageService: MessageService,
    private productApi: ProductApiService
  ) {}

  public deleteProduct(): void {
    console.info('Eliminando producto...');

    this.productApi.deleteProduct(this.id).subscribe({
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
          detail: 'Error al eliminar el producto',
          severity: 'error',
        });
      },
    });
  }
}
