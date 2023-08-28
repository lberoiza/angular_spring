import { Component } from '@angular/core';

@Component({
  selector: 'app-examplelist',
  templateUrl: './examplelist.component.html',
  styleUrls: ['./examplelist.component.css']
})
export class ExamplelistComponent {
  languageList: string[] = ['Java EE', 'Ruby', 'PHP', 'Python', 'Pearl', 'TypeScript', 'JavaScript'];
  areLanguagesVisible: boolean = true;

  getButtonText(): string {
    return this.areLanguagesVisible ? 'Hide' : 'Show';
  }

  toggleLanguageList():void {
    this.areLanguagesVisible = !this.areLanguagesVisible;
  }

}
