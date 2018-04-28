import { Injectable } from "@angular/core";
import { Http,Response,RequestOptions, Request, RequestMethod } from "@angular/http";
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';
import { AuthenticationService } from "../shared/authentication.service";
import { conf } from "../../environments/config";
import {HttpClient} from "@angular/common/http"

@Injectable()
export class ClientService{
    clientUrl = conf.serverUrl+"/api/client";
    constructor(private auth:AuthenticationService, private http : HttpClient){}
    getClient(id){
       return this.http.get(this.clientUrl+"/"+ id)
    }
    deleteClient(id){
        return this.http.delete(this.clientUrl+"/"+id)
    }
    editClient(userForm,client_id){
        return this.http.patch(this.clientUrl+"/"+client_id,userForm)
    }
    saveClient(userForm){
        return this.http.post( this.clientUrl,userForm)
    }
    sendEmailClient(id){
        return this.http.get( this.clientUrl+"/"+id+"/sendMail")
    }
}