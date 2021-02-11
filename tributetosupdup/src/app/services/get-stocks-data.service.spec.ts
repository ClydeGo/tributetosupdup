import { TestBed } from '@angular/core/testing';

import { GetStocksDataService } from './get-stocks-data.service';

describe('GetStocksDataService', () => {
  let service: GetStocksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStocksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
