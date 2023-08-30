import {Component, OnInit} from '@angular/core';
import {Client} from "../clients/client";
import {ClientService} from "../clients/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../services/alert.service";
import {AlertMessage} from "../Types";


@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {
  protected title = "New Client";

  protected client: Client = new Client();


  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alert: AlertService) {
  }


  ngOnInit(): void {
    this.getClient();
  }


  getClient(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.clientService.getClient(id).subscribe(client => this.client = client);
      }
    });
  }

  saveClient(): void {
    this.clientService.createClient(this.client).subscribe(
      newClient => {
        this.client = newClient;
        const message: AlertMessage = {
          title: 'New Client',
          content: `Client "${this.client.getFullName()}" added successfully`
        };
        this.redirectAfterCreateOrUpdateAndShowMessage(message);
      }
    );
  }

  updateClient(): void {
    this.clientService.updateClient(this.client).subscribe(
      updatedClient => {
        this.client = updatedClient;
        const message: AlertMessage = {
          title: 'Client updated',
          content: `Client "${this.client.getFullName()}" updated successfully`
        };
        this.redirectAfterCreateOrUpdateAndShowMessage(message);
      }
    );
  }

  redirectAfterCreateOrUpdateAndShowMessage(message: AlertMessage) {
    this.router.navigate(['/clients']).then(() => {
      this.alert.showSuccess(message);
    });
  }


}
