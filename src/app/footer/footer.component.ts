import {Component} from '@angular/core';
import {Author} from "../../types";


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true
})
export class FooterComponent {
  author: Author = {name: 'Luis Alberto', surname: 'Beroíza Osses'};
}
