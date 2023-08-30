import {Component} from '@angular/core';
import {Client} from "../clients/client";
import {ClientService} from "../clients/client.service";
import {Router} from "@angular/router";
import swal from 'sweetalert2'

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent {
  protected title = "New Client";

  protected client: Client = new Client();


  constructor(
    private clientService: ClientService,
    private router: Router) {
  }

  save(_event: SubmitEvent): void {
    this.clientService.createClient(this.client).subscribe(
      newClient => {
        this.client = newClient;
        this.router.navigate(['/clients']).then(() => {
          swal.fire(
            'New Client',
            `Client "${this.client.getFullName()}" added successfully`,
            'success'
          ).then(() => {});
        });
      }
    );
  }

}
