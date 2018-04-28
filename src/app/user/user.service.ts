import { Injectable } from "@angular/core";
import { Http,Response,RequestOptions, Request, RequestMethod } from "@angular/http";
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';
import { AuthenticationService } from "../shared/authentication.service";
@Injectable()

export class UserService{

    constructor(private _http:Http,private auth:AuthenticationService){}
    createDepartment(){ 

    }
    getUsers(){
        let headers = new Headers(
            {
                'Authorisation': 'Token eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZXRtaXJsdW1pMUBnbWFpbC5jb20iLCJ1c2VySWQiOiIzIiwicGFzc3dvcmQiOiJtaXJpLmx1bWkzIn0.55z5hkEGkHQ-van0B2lYxjP69rwhxQ6-k-W68HubWXCqltG0SonYo58ERpZcqw2NWDRHUWE6vhEzxj2bqxK1ug'
            }
        );
        let options = new RequestOptions({ headers: headers });
         return this._http
        .get("http://localhost:8082/rest/user/get/",options)
        .map((response:Response)=>response.json());
    }
    getUser(user_id){
        let headers = new Headers(
            {
                'Authorisation': 'Token '+localStorage.getItem('token')
            }
        );
        let options = new RequestOptions({ headers: headers });
        return this._http
       .get("http://localhost:8082/rest/user/get/"+user_id,options)
       .map((response:Response)=>response.json());
   }
   deleteUser(user_id){
        let headers = new Headers(
            {
                'Authorisation': 'Token '+localStorage.getItem('token')
            }
        );
        let options = new RequestOptions({ headers: headers });
        return this._http
        .delete("http://localhost:8082/rest/user/delete/"+user_id,options)
        .map((response:Response)=>response.json());
    }
    editUser(userForm,user_id){
        let headers = new Headers(
            {
                'Authorisation': 'Token '+localStorage.getItem('token')
            }
        );
        let options = new RequestOptions({ headers: headers });
        return this._http
        .put("http://localhost:8082/rest/user/edit/"+user_id,userForm,options)
        .map((response:Response)=>response.json());
    }
    saveUser(userForm){
        let headers = new Headers(
            {
                'Authorisation': 'Token '+localStorage.getItem('token')
            }
        );
        let options = new RequestOptions({ headers: headers });
        return this._http
        .post("http://localhost:8082/rest/user/create",userForm,options)
        .map((response:Response)=>response.json());
    }
    makeActive(user_id){
        let headers = new Headers(
            {
                'Authorisation': 'Token '+localStorage.getItem('token')
            }
        );
        let options = new RequestOptions({ headers: headers });
        return this._http
        .get("http://localhost:8082/rest/user/makeActvie/"+user_id,options)
        .map((response:Response)=>response.json());
    }
}