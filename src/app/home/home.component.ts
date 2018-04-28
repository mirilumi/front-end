import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from "@angular/router";
import { User } from '../shared/user';
import { NotificationsService } from 'angular2-notifications';
import { Notifications } from '../shared/notifications';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private auth:AuthenticationService, private notif: NotificationsService) { }
  private UserObj:object = {};
  
  private userLogin = false;
  ngOnInit() {

    // Notifications.DisplaySuccessToastMessage('SUCCESS',' Record was successfully created');
    if(localStorage.getItem("token") === null){ //} || localStorage.getItem("currentUser") === null){
      
    }else{
      this.userLogin = true;
     // this.UserObj = new User(localStorage.getItem("token"),JSON.parse(localStorage.getItem("currentUser")));
    }
  
  }
  logout(){
    this.auth.logout();
  }
}
