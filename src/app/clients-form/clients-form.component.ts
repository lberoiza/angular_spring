import {Component, OnInit} from '@angular/core';
import {Client} from "../clients/client";
import {ClientService} from "../clients/client.service";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import {AlertService, AlertMessage} from "../services/alert.service";
import ApiResponse, {ApiResponseTyp} from "../Utils/ApiResponse";
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';


@Component({
    selector: 'app-clients-form',
    templateUrl: './clients-form.component.html',
    styleUrls: ['./clients-form.component.css'],
    standalone: true,
    imports: [NgIf, NgFor, FormsModule, RouterLink]
})
export class ClientsFormComponent implements OnInit {
  protected title = "New Client";
  protected client: Client = new Client();
  protected validationErrors: string[] = [];


  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alert: AlertService) {
  }


  ngOnInit(): void {
    this.getClient();
  }


  private getClient(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.title = "Update Client";
        this.clientService.getClient(id).subscribe(client => this.client = client);
      }
    });
  }

  protected saveClient(): void {
    this.clientService.createClient(this.client).subscribe(
      {
        next: newClient => {
          this.client = newClient;
          const message: AlertMessage = {
            title: 'New Client',
            content: `Client "${this.client.getFullName()}" added successfully`
          };
          this.redirectAfterCreateOrUpdateAndShowMessage(message);
        },
        error: err => this.analyseApiResponse(err.error as ApiResponseTyp<Client>)
      }
    );
  }

  protected updateClient(): void {
    this.clientService.updateClient(this.client).subscribe(
      {
        next: updatedClient => {
          this.client = updatedClient;
          const message: AlertMessage = {
            title: 'Client updated',
            content: `Client "${this.client.getFullName()}" updated successfully`
          };
          this.redirectAfterCreateOrUpdateAndShowMessage(message);
        },
        error: err => this.analyseApiResponse(err.error as ApiResponseTyp<Client>)
      }
    );
  }

  private redirectAfterCreateOrUpdateAndShowMessage(message: AlertMessage) {
    this.router.navigate(['/clients']).then(() => {
      this.alert.showSuccess(message);
    });
  }

  private analyseApiResponse(apiResponseTyp: ApiResponseTyp<Client>) {
    if (apiResponseTyp) {
      const apiResponse: ApiResponse<Client> = new ApiResponse(apiResponseTyp);
      this.checkForValidationErrors(apiResponse);
    }
  }

  private checkForValidationErrors(apiResponse: ApiResponse<Client>) {
    if (apiResponse.hasValidationErrors()) {
      this.validationErrors = apiResponse.getErrorsMessages();
      this.validationErrors.sort();
    }
  }


}
