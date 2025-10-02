import { TestBed } from '@angular/core/testing';

import { Servicepays } from './servicepays';

describe('Servicepays', () => {
  let service: Servicepays;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicepays);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
