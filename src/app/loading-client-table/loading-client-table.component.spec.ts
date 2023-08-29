import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingClientTableComponent } from './loading-client-table.component';

describe('LoadingComponent', () => {
  let component: LoadingClientTableComponent;
  let fixture: ComponentFixture<LoadingClientTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingClientTableComponent]
    });
    fixture = TestBed.createComponent(LoadingClientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
