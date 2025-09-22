import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { LoginRequest } from '../interfaces/login-request';
import { map, Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class Auth {
  apiUrl: string = enviroment.apiUrl;
  private tokenkey='token'

  constructor(private http: HttpClient) { }

  login(data:LoginRequest):Observable<AuthResponse>{
    return this.http
    .post<AuthResponse>(`${this.apiUrl}/Acount/login`,data).pipe(
      map((response)=>{
        if(response.isSuccess){
          localStorage.setItem('token', response.token);
        }

        return response;
      })
    )


  }

  isLoggedIn =(): boolean =>{
    const token= this.getToken();
    if(!token) return false;

    return !this.isTokenExpired();

  };


  isTokenExpired(){
    const token = this.getToken();
    if(!token) return true;

    const decoded: any=jwtDecode(token);

    const isTokenExpired = Date.now() >= decoded.exp * 1000;

    if(isTokenExpired){
      this.logout();
    }

    return isTokenExpired;

  }

  logout=():void =>{
    localStorage.removeItem(this.tokenkey);
  }

  private getToken=():string | null =>{
    return localStorage.getItem(this.tokenkey) || '';
  }

}
