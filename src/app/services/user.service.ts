import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";

const API_URL = "http://localhost:8080/api/users"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  login(user: { password: any; username: any }): Observable<User> {
    return this.httpClient.post<User>(API_URL + '/login', user)
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(API_URL + '/register', user)
  }
}
