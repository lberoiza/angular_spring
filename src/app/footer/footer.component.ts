import {Component} from '@angular/core';
import {Author} from '../Types'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  author: Author = {name: 'Luis Alberto', surname: 'Beroíza Osses'};
}
