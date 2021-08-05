import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetersPageComponent } from './meters-page.component';

describe('MetersPageComponent', () => {
  let component: MetersPageComponent;
  let fixture: ComponentFixture<MetersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
