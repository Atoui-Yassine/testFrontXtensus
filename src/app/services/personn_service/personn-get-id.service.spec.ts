import { TestBed } from '@angular/core/testing';

import { PersonnGetIDService } from './personn-get-id.service';

describe('PersonnGetIDService', () => {
  let service: PersonnGetIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnGetIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
