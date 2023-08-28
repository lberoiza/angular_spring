import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ExamplelistComponent} from './examplelist/examplelist.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientService} from "./clients/client.service";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: "full"},
  {path: 'languages', component: ExamplelistComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'about', component: AboutComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExamplelistComponent,
    ClientsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
