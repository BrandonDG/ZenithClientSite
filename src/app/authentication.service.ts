import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public token: string;
    public URL: string = 'http://zenithsocietya2.azurewebsites.net/connect/token';
 
    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    
    login(username: string, password: string) {
      let login = 'username='+username+'&password='+password+'&grant_type=password'
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let requestOptions = new RequestOptions({ headers: headers });
      return this.http.post(this.URL, login, requestOptions)
            .toPromise()
            .then(r => {
                let user = r.json();
                this.token = user['access_token'];
                localStorage.setItem('TOKEN', this.token);
            });
    }

    getAuthorization(): string {
      let token: string = localStorage.getItem('TOKEN');
      return token == undefined ? "" : token;
    }

    isLoggedIn(): boolean {
      let token: string = localStorage.getItem('TOKEN');
      return token != undefined;
    }
 
    logout(): void {
        this.token = null;
        localStorage.setItem('TOKEN', undefined);
        localStorage.removeItem('currentUser');
    }
}