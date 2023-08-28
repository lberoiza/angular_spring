import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplelistComponent } from './examplelist.component';

describe('ExamplelistComponent', () => {
  let component: ExamplelistComponent;
  let fixture: ComponentFixture<ExamplelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplelistComponent]
    });
    fixture = TestBed.createComponent(ExamplelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
