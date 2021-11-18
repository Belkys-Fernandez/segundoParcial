import { TestBed } from '@angular/core/testing';

import { PresonaService } from './presona.service';

describe('PresonaService', () => {
  let service: PresonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
