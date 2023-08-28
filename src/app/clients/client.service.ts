import { Injectable } from '@angular/core';
import {Client} from "./client";
import {CLIENT_LIST} from "./clients.json";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Client[] {
    return CLIENT_LIST
  }
}
