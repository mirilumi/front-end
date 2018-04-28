
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const newRequest = request.clone({setHeaders: {Authorization: 'Bearer '+ this.auth.getToken()}});
    // const newRequest = request.clone({ headers: request.headers.set('Authorization', 'Bearer '+ this.auth.getToken()) });
    // return next.handle(newRequest);
  
    // return next.handle(newRequest).catch((err: any) => { 
    //   if (err instanceof HttpErrorResponse) {
    //       if (err.status === 401) {
    //         console.log("sdfasdfsfs")
    //         //use switchMap to really return next.handle(authReq)
    //       alert("test")
    //       }
    //     }
    //     return Observable.throw(err);
    //   }
    // );


    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

    return next.handle(request);
        
    //   }
    
    // do((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //     // do stuff with response if you want
    //   }
    // }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     if (err.status === 401) {
    //       // redirect to the login route
    //       // or show a modal
    //     }
    //   }
    // });
  }
}