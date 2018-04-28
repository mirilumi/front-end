import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';
import { Notifications } from '../../shared/notifications';
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  savedClient = {};
  private id;
  constructor(private clientService:ClientService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
   });
    this.getClient();
  }
  getClient(){
    this.clientService.getClient(this.id)
    .subscribe(data => {
      console.log(data)
      this.savedClient = data;
    }, error => {
    console.log(error.json());
    });
  }
  editClient(clientForm:NgForm){
    this.clientService.editClient(clientForm.value,this.id)
    .subscribe(data => {
      Notifications.DisplaySuccessToastMessage('<strong>SUCCESS</strong>',' Client was successfully edited');
      this.router.navigate(['clients']);
    }, error => {
      // vtm kur te jete error i vecante
      // Notifications.DisplayErrorToastMessage('Error',' An error occurred');
    });
  }
  cancel(){
    this.router.navigate(['clients']);
  }

}
