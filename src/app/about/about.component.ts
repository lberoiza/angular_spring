import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true
})
export class AboutComponent {
  title: string = 'Clientes App';
  author: string = 'Luis Beroíza';
}
