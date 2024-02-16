import { TestBed } from '@angular/core/testing';

import { PersonnService } from './personn.service';

describe('PersonnService', () => {
  let service: PersonnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
