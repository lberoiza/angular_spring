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

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndPointList).pipe(
      map(responseList => responseList.map(response => Client.of(response)
    )));
  }

  public createClient(client: Client): Observable<Client> {
    return this.http
      .post<Client>(this.urlEndPointClient, client, {headers: this.httpHeaders})
      .pipe(map(responseClient => Client.of(responseClient)));
  }

  public getClient(id: number): Observable<Client> {
    return this.http
      .get<Client>(`${this.urlEndPointClient}/${id}`)
      .pipe(map(responseClient => Client.of(responseClient)));
  }

  public updateClient(client: Client): Observable<Client> {
    return this.http
      .put<Client>(`${this.urlEndPointClient}/${client.id}`, client, {headers: this.httpHeaders})
      .pipe(map(responseClient => Client.of(responseClient)));
  }

  public deleteClient(client: Client): Observable<Client> {
    return this.http
      .delete<Client>(`${this.urlEndPointClient}/${client.id}`, {headers: this.httpHeaders});
  }
}
