import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
//import { NotificationService } from 'ng2-notify-popup';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthenticationService,private router:Router) { }

  ngOnInit() {
          // this.notify.show("Register Success. You Have to wait for admin confirmation");

  }
  register_user(register: NgForm){
    console.log(register.value);
    this.auth.register(register.value)
    .subscribe(data => {
        alert(data.message);
        this.router.navigate(['login']);
    }, error => {
    alert(error.json().errorMessage);
    });
  }
  cancel(){
    this.router.navigate(['']);
  }
} 
