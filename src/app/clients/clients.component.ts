import {Component, OnInit} from '@angular/core';
import {Client} from "./client";
import {ClientService} from "./client.service";
import {AlertService, AlertMessage} from "../services/alert.service";


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientList: Client[] = [];
  loading: boolean = true;

  constructor(
    private clientService: ClientService,
    private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.clientService.getClients().subscribe(clients => {
      this.loading = false;
      this.clientList = clients
    });
  }

  deleteClient(clientToDelete: Client): void {
    const message: AlertMessage = {
      title: 'Delete Client',
      content: `Are you sure, that you want to delete '${clientToDelete.getFullName()}'`
    };
    this.alertService.confirmDialog(message, () => {
      this.clientService.deleteClient(clientToDelete).subscribe(() => {
        this.clientList = this.clientList.filter(client => client != clientToDelete);
        const successMessage: AlertMessage = {
          title: `Client '${clientToDelete.getFullName()}' deleted`,
          content: `The Client was successfully deleted`
        };
        this.alertService.showSuccess(successMessage);
      });
    })

  }

}
