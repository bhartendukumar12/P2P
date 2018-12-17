import { TestBed } from '@angular/core/testing';

import { Commonservice } from './commonservice.service';

describe('CommonserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Commonservice = TestBed.get(Commonservice);
    expect(service).toBeTruthy();
  });
});
