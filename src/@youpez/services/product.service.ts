import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  host = environment.server;

  constructor(
    private httpclient: HttpClient
  ) {}

  getByCriteria(value: string, page: Number, pageSize: Number, sort: string, order: string): Observable<Product[]> {
    return this.httpclient.get<Product[]>(environment.server + `/product/listpage?value=${value}&page=${page}&pageSize=${pageSize}&sort=${sort}&order=${order}`);
  }

  public register(registerData) {
    return this.httpclient.post(this.host + '/registerNewUser', registerData);
  }


  public login(loginData) {
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
