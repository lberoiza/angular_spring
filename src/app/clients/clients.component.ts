import {Component, OnInit} from '@angular/core';
import {Client} from "./client";
import {ClientService} from "./client.service";


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientList: Client[] = [];

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => this.clientList = clients);
  }
}
