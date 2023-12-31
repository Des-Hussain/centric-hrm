import {inject} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateFn,
} from '@angular/router';
import {of} from 'rxjs';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (token) {
    return of(true);
  } else {
    router.navigate(['/auth/login']);
    return of(false);
  }
}