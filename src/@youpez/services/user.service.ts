import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  host = environment.server;

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public register(registerData) {
    return this.httpclient.post(this.host + '/registerNewUser', registerData);
  }

  public login(loginData) {
    debugger
    return this.httpclient.post(this.host + '/auth/login', loginData);
  }

  public forUser() {
    return this.httpclient.get(this.host + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.host + '/forAdmin', {
      responseType: 'text',
    });
  }

}
