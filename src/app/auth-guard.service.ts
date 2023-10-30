import { Injectable, inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

export
@Injectable({
  providedIn: 'root',
})
class AuthGuardService {
  constructor(private router: Router) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const sessionInit = localStorage.getItem('sessionInit');

    if (sessionInit !== undefined) {
      if (sessionInit === 'true') {
        return true;
      }
    }

    this.router.navigateByUrl('/');
    return false;
  }
}

export const canActivateParent: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AuthGuardService).canActivate(next, state);
};
