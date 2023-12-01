import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  host = environment.server;
  constructor(private httpclient: HttpClient) {}

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getToken();
  }

  validToken(token: String): any {
    return this.httpclient.get(this.host + "/auth/tokenValid/" + token)//TEM QUE FAZER A VERIFICAÇÃO DO TOKEN E DEPOIS CONTINUAR!!!!
  }
}
