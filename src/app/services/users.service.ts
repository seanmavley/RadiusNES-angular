import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './auth.service';

const apiURL = 'http://localhost:3000/users';

@Injectable()
export class UsersService {

  constructor(
        private http: Http,
        private Auth: AuthenticationService ) {
  }

  getUsers(): Observable<boolean> {
    let headers = new Headers({ 'Authorization': this.Auth.token });
    let options = new RequestOptions( { headers: headers });

    return this.http.get(apiURL, options)
      .map((res: Response) => res.json());
  }

  createUser(formData) {
    let headers = new Headers({ 'Authorization': this.Auth.token });
    let options = new RequestOptions( { headers: headers });

    return this.http.post(apiURL, formData, options)
      .map((res: Response) => { 
        console.log(res.json());
        return res.json();
      });
  }

}
