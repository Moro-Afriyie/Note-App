import { TestBed } from '@angular/core/testing';

import { NotePadEditServiceService } from './note-pad-edit-service.service';

describe('NotePadEditServiceService', () => {
  let service: NotePadEditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotePadEditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
