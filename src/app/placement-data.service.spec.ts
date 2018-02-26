import { TestBed, inject } from '@angular/core/testing';

import { PlacementDataService } from './placement-data.service';

describe('PlacementDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlacementDataService]
    });
  });

  it('should be created', inject([PlacementDataService], (service: PlacementDataService) => {
    expect(service).toBeTruthy();
  }));
});
