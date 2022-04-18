import { TestBed } from '@angular/core/testing';

import { VendorGetServiceService } from './vendor-get-service.service';

describe('VendorGetServiceService', () => {
  let service: VendorGetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorGetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
