import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Notifications } from '../shared/notifications';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {};
  constructor(private auth:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }
  login_user(login: NgForm){
    this.auth.login(login.value)
    .subscribe(data => {
        this.router.navigate(['clients']);
        localStorage.setItem('token', data.access_token);
    }, error => {
      Notifications.DisplayErrorToastMessage('Error',' Wrong username or password');
    });
  }
  cancel(){
    this.router.navigate(['']);
  }
  register(){
    this.router.navigate(['register']);
  }
}
