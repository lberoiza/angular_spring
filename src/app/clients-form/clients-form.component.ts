import {Component} from '@angular/core';
import {Client} from "../clients/client";

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent {
  protected title = "New Client";

  protected client: Client = new Client();


  save(event: SubmitEvent): void {
    console.log("Submit Format");
    console.log("event", event);
    console.log("client", this.client);
  }

}
