import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import { UserService } from "../user.service";
import { AuthenticationService } from '../../shared/authentication.service';
import { User } from "../../shared/user";
import { UserService } from '../../user/user.service';
@Component({ 
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public users  = [];
  private notification = [];
  private UserObj:object = {};
  constructor(private userService:UserService,router:Router,private auth:AuthenticationService) { }
  ngOnInit() {}
  // get_users(){
  //   this.userService.getUsers().subscribe(data => {
  //     this.users = data;
  // }, error => {
  //   console.log(error.json());
  // });
  // }

  // delete_user(department_id){
  //   this.userService.deleteUser(department_id).subscribe(data => {
  //     alert(data.message);
  //     this.get_users();

  //   }, error => {
  //     alert(error.message);
  //   });
  // }
  // makeActive(user_id){
  //   this.userService.makeActive(user_id).subscribe(data => {
  //     alert(data.message);
  //     this.get_users();

  //   }, error => {
  //     alert(error.message);
  //   });
  // }
}