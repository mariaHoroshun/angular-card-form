import { TestBed } from '@angular/core/testing';

import { ReactorsService } from './reactors.service';

describe('ReactorsService', () => {
  let service: ReactorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
