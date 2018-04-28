import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions, Request, RequestMethod } from "@angular/http";
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";
import { User } from "../shared/user";
import { conf } from '../../environments/config';
@Injectable()
export class AuthenticationService {
    constructor(private _http: Http,private router:Router) { }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public isAuthenticated(): boolean {
        if(localStorage.getItem('token') == null )
            return false;
        else
            return true;
        // we can also check expiration and dont forget the registration TC
      }

    login(loginForm){//: Observable<HttpResponse<any>> {
         return this._http
        .post(conf.serverUrl + '/auth/login',loginForm)
        .map((response:Response)=>response.json());
       // return this.http.post(conf.serverUrl + '/auth/login', loginForm, {observe:'response'})

    }
    register(registerForm) {
        return this._http
       .post(conf.serverUrl+'/auth/register',registerForm)
       .map((response:Response)=>response.json());
   }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem("token");
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }

}