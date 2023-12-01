import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../../@youpez/services/user-auth.service'
import { UserService } from '../../@youpez/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userAuthService.getToken() !== null) {
      const token = this.userAuthService.getToken();

      if (token) {
        return true;
      } else {
        this.router.navigate(['/auth/modern/login']);
        return false;
      }
    }

    this.router.navigate(['/auth/modern/login']);
    return false;
  }
}
