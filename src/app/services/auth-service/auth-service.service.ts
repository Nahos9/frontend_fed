import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  BASE_URL = ['http://localhost:8080']

  constructor(private http: HttpClient) { }

  signup(signRequest:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}/api/auth/signup`,signRequest)
  }

  signin(signinRequest:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}/api/auth/login`,signinRequest)
  }
}
