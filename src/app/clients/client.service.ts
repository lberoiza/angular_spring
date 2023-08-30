import {Injectable} from '@angular/core';
import {Client} from "./client";
import {Observable, map} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPointClient = environment.apiUrl + '/clients';
  private urlEndPointList: string = this.urlEndPointClient + '/list';

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
    return this.http
      .post<Client>(this.urlEndPointClient, client, {headers: this.httpHeaders})
      .pipe(map(responseClient => Client.of(responseClient)));
  }

  getClient(id: number): Observable<Client> {
    return this.http
      .get<Client>(`${this.urlEndPointClient}/${id}`)
      .pipe(map(responseClient => Client.of(responseClient)));
  }

  updateClient(client: Client): Observable<Client> {
    return this.http
      .put<Client>(`${this.urlEndPointClient}/${client.id}`, client, {headers: this.httpHeaders})
      .pipe(map(responseClient => Client.of(responseClient)));
  }

}
