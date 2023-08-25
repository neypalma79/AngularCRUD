import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnDestroy {
  title: string = 'AngularCRUD';
  interval: any;

  constructor() {
    this.interval = setInterval(this.verificarSesion, 10000);
  }

  ngOnDestroy(): void {
    this.interval.clearInterval();
  }

  public verificarSesion(): void {
    // verificar sesion activa en bd
    console.info('Verificando sesion...');
  }
}
