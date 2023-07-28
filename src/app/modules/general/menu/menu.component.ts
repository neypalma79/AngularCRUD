import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
  constructor(private router: Router) {}

  public logout(): void {
    console.info('Realizando logout de app...');
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
