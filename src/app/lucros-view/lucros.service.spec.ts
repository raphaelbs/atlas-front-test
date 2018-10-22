import { TestBed, inject } from '@angular/core/testing';

import { LucrosService } from './lucros.service';

describe('LucrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LucrosService]
    });
  });

  it('should be created', inject([LucrosService], (service: LucrosService) => {
    expect(service).toBeTruthy();
  }));
});
