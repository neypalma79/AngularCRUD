import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'AngularCRUD';

  constructor() {
    setInterval(this.verificarSesion, 10000);
  }

  public verificarSesion(): void {
    // verificar sesion activa en bd
    console.info('Verificando sesion...');
  }
}
