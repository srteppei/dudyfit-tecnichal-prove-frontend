import { TestBed } from '@angular/core/testing';

import { ClientAssignationService } from './client-assignation.service';

describe('ClientAssignationService', () => {
  let service: ClientAssignationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAssignationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
