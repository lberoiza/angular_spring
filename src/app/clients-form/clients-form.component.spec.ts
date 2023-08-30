import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsFormComponent } from './clients-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('ClientsFormComponent', () => {
  let component: ClientsFormComponent;
  let fixture: ComponentFixture<ClientsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsFormComponent],
      imports: [FormsModule, HttpClientModule]
    });
    fixture = TestBed.createComponent(ClientsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
