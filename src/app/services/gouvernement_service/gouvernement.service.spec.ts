import { TestBed } from '@angular/core/testing';

import { GouvernementService } from './gouvernement.service';

describe('GouvernementService', () => {
  let service: GouvernementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GouvernementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
