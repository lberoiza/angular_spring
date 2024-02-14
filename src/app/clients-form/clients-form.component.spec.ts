import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientsFormComponent} from './clients-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";

describe('ClientsFormComponent', () => {
  let component: ClientsFormComponent;
  let fixture: ComponentFixture<ClientsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [FormsModule, HttpClientModule, RouterTestingModule, ClientsFormComponent]
});
    fixture = TestBed.createComponent(ClientsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
