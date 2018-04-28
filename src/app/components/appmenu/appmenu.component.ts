import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

  private UserObj:object = {};
  constructor(private auth:AuthenticationService,private router:Router){}
  ngOnInit(){
   // this.UserObj = this.auth.verify_user();
  }
  department_list(){
    this.router.navigate(['department']);
  }
  department_create(){
    this.router.navigate(['department/add']);
  }
  user_list(){
    this.router.navigate(['user']);
  }
  user_create(){
    this.router.navigate(['user/add']);
  }
  employ_list(){
    this.router.navigate(['employees']);
  }
  settings(){
    this.router.navigate(['settings']);
  }
  client_list(){
    this.router.navigate(['clients']);
  }
}
