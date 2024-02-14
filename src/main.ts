import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppComponent } from './app/app.component';
import { AboutComponent } from './app/about/about.component';
import { ClientsFormComponent } from './app/clients-form/clients-form.component';
import { ClientsComponent } from './app/clients/clients.component';
import { ExamplelistComponent } from './app/examplelist/examplelist.component';
import { provideRouter, Routes } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { environment } from './environments/environment';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { ClientService } from './app/clients/client.service';
import { AlertService } from './app/services/alert.service';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: "full"},
  {path: 'languages', component: ExamplelistComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/page/:pageNr', component: ClientsComponent},
  {path: 'clients/form', component: ClientsFormComponent},
  {path: 'clients/form/:id', component: ClientsFormComponent},
  {path: 'about', component: AboutComponent}
]




bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(FormsModule, BrowserModule),
        AlertService,
        ClientService,
        { provide: LOCALE_ID, useValue: environment.location },
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
