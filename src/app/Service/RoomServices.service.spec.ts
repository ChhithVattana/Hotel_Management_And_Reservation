/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoomServicesService } from './RoomServices.service';

describe('Service: RoomServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomServicesService]
    });
  });

  it('should ...', inject([RoomServicesService], (service: RoomServicesService) => {
    expect(service).toBeTruthy();
  }));
});
