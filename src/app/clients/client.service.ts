import {Injectable} from '@angular/core';
import {Client} from "./client";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndPoint: string = 'http://localhost:8080/api/clients/list';

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    //  Option 1
    return this.http.get<Client[]>(this.urlEndPoint);

    // Option 2
    // import {Observable, of, map} from "rxjs";
    // return this.http.get(this.urlEndPoint).pipe(map(response => response as Client[]));
  }
}
