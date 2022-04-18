import { TestBed } from '@angular/core/testing';

import { HouseAssistantService } from './house-assistant.service';

describe('HouseAssistantService', () => {
  let service: HouseAssistantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseAssistantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
