/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodMenuServiceService } from './FoodMenuService.service';

describe('Service: FoodMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodMenuServiceService]
    });
  });

  it('should ...', inject([FoodMenuServiceService], (service: FoodMenuServiceService) => {
    expect(service).toBeTruthy();
  }));
});
