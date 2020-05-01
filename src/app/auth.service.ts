import { Injectable } from '@angular/core';
//import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  __apiUrl: string = "http://localhost:3001/api";

   constructor(private http: HttpClient) { }

  public register(userInfo: User) {
    return this.http.post(`${this.__apiUrl}/users/register`, userInfo);
  }

  public login(userInfo: User) {
    return this.http.post(`${this.__apiUrl}/users/login`, userInfo);
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_ID');
  }

  public getUser(): Observable<User[]> {
    let getToken = localStorage.getItem('ACCESS_TOKEN');
    let userId = localStorage.getItem('USER_ID');
    return this.http.get<User[]>(`${this.__apiUrl}/users/${userId}`, { headers: { 'Authorization': `Bearer ${getToken}` } } );
  }

  public getIssues() {
    return this.http.get(`${this.__apiUrl}/issues/all`);
  }

}
export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  addressline: string;
  city: string;
  country: string;
  zipcode: string;
}