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
  loading: boolean = true;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.clientService.getClients().subscribe(clients => {
      this.loading = false;
      this.clientList = clients
    });
  }
}
