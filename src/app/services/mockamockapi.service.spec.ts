import { TestBed } from '@angular/core/testing';

import { MockamockapiService } from './mockamockapi.service';

describe('MockamockapiService', () => {
  let service: MockamockapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockamockapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
