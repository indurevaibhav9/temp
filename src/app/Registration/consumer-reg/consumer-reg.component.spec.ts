import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerRegComponent } from './consumer-reg.component';

describe('ConsumerRegComponent', () => {
  let component: ConsumerRegComponent;
  let fixture: ComponentFixture<ConsumerRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumerRegComponent]
    });
    fixture = TestBed.createComponent(ConsumerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
