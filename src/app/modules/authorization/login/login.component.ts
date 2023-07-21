import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  private user: User = { id: 0, username: '', password: '', status: '' };

  constructor(private userApi: UserApiService, private router: Router) {}

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
          }
        } else {
          console.info('Login no autorizado');
        }
      },
      error: (error) => {
        console.info(error);
      },
    });
  }
}
