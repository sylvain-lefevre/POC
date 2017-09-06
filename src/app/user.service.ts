import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:8080/frais-metier/login';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  connect(user: User): Promise<any> {
    return this.http.post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
             .toPromise()
             .then(response => response.json().data as any[])
             .catch(this.handleError);

  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
