import { TestBed } from '@angular/core/testing';

import { IntsrumentStoreService } from './intsrument-store.service';

describe('IntsrumentStoreService', () => {
  let service: IntsrumentStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntsrumentStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
