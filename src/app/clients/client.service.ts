import {Injectable} from '@angular/core';
import {Client} from "./client";
import {Observable, map, catchError, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import ApiResponse, {ApiResponseTyp} from "../Utils/ApiResponse";
import {Router} from "@angular/router";
import {AlertService, AlertMessage} from "../services/alert.service";


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPointClient = environment.apiUrl + '/clients';
  private urlEndPointList: string = this.urlEndPointClient + '/list';

  constructor(
    private http: HttpClient,
    private router: Router,
    private alert: AlertService) {
  }

  public getClients(): Observable<Client[]> {
    return this.http.get<ApiResponseTyp<Client[]>>(this.urlEndPointList)
      .pipe(map(apiResponse => apiResponse.response.map(response => Client.of(response)
    )));
  }

  public createClient(client: Client): Observable<Client> {
    return this.http
      .post<ApiResponseTyp<Client>>(this.urlEndPointClient, client, {headers: this.httpHeaders})
      .pipe<ApiResponseTyp<Client>, Client>(
        catchError(e => this.errorHandler(e)),
        map(apiResponse => Client.of(apiResponse.response)));
  }

  public getClient(id: number): Observable<Client> {
    return this.http
      .get<ApiResponseTyp<Client>>(`${this.urlEndPointClient}/${id}`)
      .pipe<ApiResponseTyp<Client>, Client>(
        catchError(e => this.errorHandler(e, '/clients')),
        map(apiResponse => Client.of(apiResponse.response)));
  }

  public updateClient(client: Client): Observable<Client> {
    return this.http
      .put<ApiResponseTyp<Client>>(`${this.urlEndPointClient}/${client.id}`, client, {headers: this.httpHeaders})
      .pipe<ApiResponseTyp<Client>, Client>(
        catchError(e => this.errorHandler(e)),
        map(apiResponse => Client.of(apiResponse.response)));
  }

  public deleteClient(client: Client): Observable<Client> {
    return this.http
      .delete<Client>(`${this.urlEndPointClient}/${client.id}`, {headers: this.httpHeaders})
      .pipe(catchError(e => this.errorHandler(e)));
  }

  private errorHandler(e: any, navigateTo: string = "") {
    const apiResponse = new ApiResponse<Client>(e.error as ApiResponseTyp<Client>);
    if(apiResponse.hasValidationErrors()){
      return throwError(e);
    }

    if(navigateTo.length > 0){
      this.router.navigate([navigateTo]).then();
    }
    const alertMessage: AlertMessage = {
      title: 'Error',
      content: apiResponse.getErrorsMessages().join(', ')
    };
    this.alert.showError(alertMessage);
    return throwError(e);
  }

}
