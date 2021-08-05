import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrsPageComponent } from './trs-page.component';

describe('TrsPageComponent', () => {
  let component: TrsPageComponent;
  let fixture: ComponentFixture<TrsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
