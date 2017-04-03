import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public token: string;
    public URL: string = 'http://zenithsocietya2.azurewebsites.net/connect/token';
    public isLoggedIn: boolean = false;
 
    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string) {
      let creds = 'username='+username+'&password='+password+'&grant_type=password'
       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
       let options = new RequestOptions({ headers: headers });
        return this.http.post(this.URL, creds, options)
            .toPromise()
            .then(r => {
                
                let user = r.json();
                this.token = user["access_token"];
                this.isLoggedIn = true;
            });
    }

    /*
    login(username: string, password: string): Observable<boolean> {
        return this.http.post('http://zenithsocietya2.azurewebsites.net/connect/token', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    } */
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}