import {Component, OnInit} from '@angular/core';
import {Client} from "./client";
import {ClientService} from "./client.service";
import {AlertService, AlertMessage} from "../services/alert.service";
import {ActivatedRoute} from "@angular/router";
import ApiResponse, {ApiResponseTyp} from "../Utils/ApiResponse";
import {Pageable} from "../Types";


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
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      let pageNumber: number = parseInt(params['pageNr']);
      if (isNaN(pageNumber)) {
        pageNumber = 0;
      }
      this.clientService.getClientPageable(pageNumber).subscribe(
        pageable => {
          this.clientList = pageable.content;
          this.loading = false;
        },
        err => {
          this.clientList = []
          this.loading = false;
        }
      );
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
