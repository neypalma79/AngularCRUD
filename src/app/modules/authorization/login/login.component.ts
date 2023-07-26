import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UserApiService } from 'src/app/services/user-api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [MessageService],
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  private user: User = { id: 0, username: '', password: '', status: '' };

  constructor(
    private userApi: UserApiService,
    private router: Router,
    private messageService: MessageService
  ) {}

  public verificarLogin(): void {
    // llamar al api de usuario (user-api.service)
    console.info(
      `Llamando a login con username: ${this.username} y password: ${this.password}`
    );

    this.userApi.doLogin(this.username, this.password).subscribe({
      next: (user) => {
        this.user = user;

        if (this.user.status !== undefined) {
          if (this.user.status === 'A') {
            console.info('Login autorizado');
            this.router.navigateByUrl('dashboard');
          } else {
            console.info('Login no autorizado');
            this.messageService.add({
              summary: 'Login',
              detail: 'usuario y/o clave incorrectos',
              severity: 'error',
            });
          }
        } else {
          console.info('Login no autorizado');
          this.messageService.add({
            summary: 'Login',
            detail: 'usuario y/o clave incorrectos',
            severity: 'error',
          });
        }
      },
      error: (error) => {
        console.info(error);
        this.messageService.add({
          summary: 'Login',
          detail: 'No se puede conectar con los servicios de login',
          severity: 'error',
        });
      },
    });
  }
}
