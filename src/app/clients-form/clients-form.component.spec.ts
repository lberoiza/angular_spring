import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsFormComponent } from './clients-form.component';
import {FormsModule} from "@angular/forms";

describe('ClientsFormComponent', () => {
  let component: ClientsFormComponent;
  let fixture: ComponentFixture<ClientsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsFormComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(ClientsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
