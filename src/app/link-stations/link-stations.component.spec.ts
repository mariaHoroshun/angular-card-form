import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkStationsComponent } from './link-stations.component';

describe('LinkStationsComponent', () => {
  let component: LinkStationsComponent;
  let fixture: ComponentFixture<LinkStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
