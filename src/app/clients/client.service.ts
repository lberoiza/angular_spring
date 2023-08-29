import {Injectable} from '@angular/core';
import {Client} from "./client";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPointList: string = environment.apiUrl + '/clients/list';
  private urlEndPointCreate: string = environment.apiUrl + '/clients';

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    //  Option 1
    return this.http.get<Client[]>(this.urlEndPointList);

    // Option 2
    // import {Observable, of, map} from "rxjs";
    // return this.http.get(this.urlEndPoint).pipe(map(response => response as Client[]));
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPointCreate, client, {headers: this.httpHeaders})
  }

}
