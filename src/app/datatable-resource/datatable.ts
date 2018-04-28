import { Component } from '@angular/core';
import { RemoteService } from './datatable.service';
import { ClientService } from '../client/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Notifications } from '../shared/notifications';

@Component({
    selector: 'datatable',
    providers: [RemoteService],
    templateUrl: './datatable.html',
    styleUrls: ['./datatable.css']
})
export class DataTable {

    items = [];
    itemCount = 0;

    constructor(private remoteService: RemoteService,private clientService:ClientService,private router:Router,private route:ActivatedRoute) {}

    reloadItems(params) {
        this.remoteService.query(params).then(result => {
            this.items = result.items;
            this.itemCount = result.count;
        });
       
    }
    deleteClient(id:any){
       Notifications.ConfirmAcion('Are you sure you want to delete the record?','Yes').then(resp=>{
            if(resp.value == true){
                this.clientService.deleteClient(id)
                    .subscribe(data => {
                        Notifications.DisplaySuccessToastMessage('<strong>SUCCESS</strong>',' Client was successfully deleted');
                        this.router.navigate(['clients']);
                    }, error => {
                        Notifications.DisplayErrorToastMessage('Error',' An error occurred');
                        console.log(error.json());
                    });
            }
           
       });
    }
    sendEmail(id){
            this.clientService.sendEmailClient(id)
            .subscribe(data => {
                // if(data.value == "OK"){
                Notifications.DisplaySuccessToastMessage('SUCCESS',' Email sent succesfully t othe client');
            // }
              this.router.navigate(['clients']);
            }, error => {
            console.log(error.json());
            });
          
    }
    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }
}
