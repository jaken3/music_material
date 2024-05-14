import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  saveUser(formLogin: any) {
    return this.save('login', formLogin)
  }
}
