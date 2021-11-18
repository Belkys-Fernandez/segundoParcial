import { TestBed } from '@angular/core/testing';

import { CustodiaGuard } from './custodia.guard';

describe('CustodiaGuard', () => {
  let guard: CustodiaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustodiaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
