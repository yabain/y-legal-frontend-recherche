import { Injectable } from '@angular/core';
import { ActionStatus } from '../../utils';
import { CRequest } from '../http/client/crequest';
import { RestApiClientService } from '../http/client/rest-api-client.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  endpoint="/search"
  query=""
  constructor( private restApiService:RestApiClientService) { }

  search(query):Promise<ActionStatus>
  {
    let result=new ActionStatus()
    return new Promise<ActionStatus>((resolve,reject)=>{
      this.restApiService.sendRequest(
        new CRequest()
        .post()
        .url(`${this.endpoint}`)
        .data({
          query
        })
      )
      .then((r)=>{
        result.result=r.result.getData()
        resolve(result)
      })
      .catch((error)=>reject(error))
    })
  }
}
