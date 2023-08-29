import {NgModule} from '@angular/core';
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

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: "full"},
  {path: 'languages', component: ExamplelistComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/new', component: ClientsFormComponent},
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
    ClientsFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
