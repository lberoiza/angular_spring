import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ExamplelistComponent} from './examplelist/examplelist.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientService} from "./clients/client.service";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from './about/about.component';
import {LoadingClientTableComponent} from './loading-client-table/loading-client-table.component';
import {ClientsFormComponent} from './clients-form/clients-form.component';
import {FormsModule} from "@angular/forms";
import {AlertService} from "./services/alert.service";
import initializeLocale from "../location";
import {environment} from "../environments/environment";
import { PaginatorComponent } from './paginator/paginator.component';

initializeLocale();


const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: "full"},
  {path: 'languages', component: ExamplelistComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/page/:pageNr', component: ClientsComponent},
  {path: 'clients/form', component: ClientsFormComponent},
  {path: 'clients/form/:id', component: ClientsFormComponent},
  {path: 'about', component: AboutComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExamplelistComponent,
    ClientsComponent,
    AboutComponent,
    LoadingClientTableComponent,
    ClientsFormComponent,
    PaginatorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AlertService,
    ClientService,
    {provide: LOCALE_ID, useValue: environment.location}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
