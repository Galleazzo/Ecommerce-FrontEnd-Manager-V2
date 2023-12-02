import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { UserAuthService } from '../../@youpez/services/user-auth.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  host = environment.server

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    
    if (req.url == this.host + `/auth/login`) {
      this.userAuthService.clear();
      return next.handle(req.clone());
    }

    const token = this.userAuthService.getToken();
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(authReq);

    } else {
      return next.handle(req);
    }
  }
}
