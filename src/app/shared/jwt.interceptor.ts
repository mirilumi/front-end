// src/app/auth/jwt.interceptor.ts

// ...
import 'rxjs/add/operator/do';
import { AuthenticationService } from './authentication.service';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Notifications } from './notifications';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService,public router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({setHeaders: {Authorization: 'Bearer '+ this.auth.getToken()}});
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          Notifications.ConfirmAcion('Token has been expired. Please login to get a new token','Yes').then(resp=>{
            if(resp.value == true){
            localStorage.removeItem("token")
            this.router.navigate(['login'])
          }    
          })
            
        }
      }
    });
  }
}