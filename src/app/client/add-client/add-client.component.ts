import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';
import { Notifications } from '../../shared/notifications';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private auth:AuthenticationService,private router:Router,private clientService:ClientService
              , ) { }

  ngOnInit() {

  }
  addClient(register: NgForm){
    this.clientService.saveClient(register.value)
    .subscribe(data => {
      Notifications.DisplaySuccessToastMessage('SUCCESS',' Record was successfully created');
      this.router.navigate(['clients']);
    }, error => {
      // not 401
      // Notifications.DisplayErrorToastMessage('Error',' An error occurred');
      // console.log(error.json());
    });
  }
  cancel(){
    this.router.navigate(['']);
  }
 
}
