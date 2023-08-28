import {Component} from '@angular/core';
import {Client} from "./client";
import {CLIENT_LIST} from "./clients.json";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  clientList: Client[] = CLIENT_LIST;

}
