import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientsComponent} from './clients.component';
import {HttpClientModule} from "@angular/common/http";
import {LoadingClientTableComponent} from "../loading-client-table/loading-client-table.component";

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientModule, ClientsComponent, LoadingClientTableComponent]
});
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
