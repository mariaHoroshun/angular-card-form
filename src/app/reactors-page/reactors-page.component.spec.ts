import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactorsPageComponent } from './reactors-page.component';

describe('ReactorsPageComponent', () => {
  let component: ReactorsPageComponent;
  let fixture: ComponentFixture<ReactorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
