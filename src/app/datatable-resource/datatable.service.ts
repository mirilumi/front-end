import { Injectable }     from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { DataTableParams } from '../data-table';
import 'rxjs/add/operator/toPromise';
import { conf } from '../../environments/config';


const BASE_URL = conf.serverUrl;

function paramsToQueryString(params: DataTableParams) {
    let result = [];

    if (params.offset != null) {
        result.push(['fromRecords', params.offset]);
    }
    if (params.limit != null) {
        result.push(['pageSize', params.limit]);
    }
    if (params.sortBy != null) {
        if (params.sortAsc != null){
            if(params.sortAsc)
                result.push(['sort', params.sortBy]);
            else
                result.push(['sort', '-' + params.sortBy]);
        }
    }
    if (params.search != null) {
        result.push(['filterByExample', params.search]);
    }    

    return result.map(param => param.join('=')).join('&');
}


@Injectable()
export class RemoteService {

    constructor (private http: Http) {}
     headers = new Headers(
        {
            'Authorization': 'Bearer '+localStorage.getItem('token')
        }
    );
     options = new RequestOptions({ headers: this.headers });
    query(params: DataTableParams) {
        return this.http.get(BASE_URL+'/api/client/?' + paramsToQueryString(params), this.options).toPromise()
            .then((resp: Response) => ({
                items: resp.json().data,
                count: resp.json().totalElements
            }));
       
    }
}
