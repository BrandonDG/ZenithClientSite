import { TestBed, inject } from '@angular/core/testing';

import { ZenithEventService } from './zenith-event.service';

describe('ZenithEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZenithEventService]
    });
  });

  it('should ...', inject([ZenithEventService], (service: ZenithEventService) => {
    expect(service).toBeTruthy();
  }));
});
