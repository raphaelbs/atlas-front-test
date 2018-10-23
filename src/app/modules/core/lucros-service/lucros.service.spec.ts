import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { LucrosService } from './lucros.service';

describe('LucrosService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LucrosService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject([LucrosService], (service: LucrosService) => {
    expect(service).toBeTruthy();
  }));

  it('should map, order and return an Observable<IDailyProfitDto[]>', inject([LucrosService], (service: LucrosService) => {

    service.getLucros().subscribe(dailyProfits => {
      expect(dailyProfits.length).toBe(2);
      expect(dailyProfits).toEqual([
        {
          date: new Date('2018-11-07 21:51:03'),
          coin: 'BTC',
          income: 0.668255,
          percent: 0.38,
          ammount: 0.668255 / 0.38
        },
        {
          date: new Date('2019-01-05 14:12:55'),
          coin: 'BTC',
          income: 2.725550,
          percent: 35 / 100,
          ammount: 2.725550 + (0.668255 / 0.38)
        },
      ]);
    });

    const req = httpMock.expectOne('https://www.mocky.io/v2/5b2c010d300000100023487a');
    expect(req.request.method).toBe('GET');
    req.flush([
      {
        'dateMoviment': '2019-01-05 14:12:55',
        'coin': 'BTC',
        'proft': '2.725550',
        'profitPercentage': 35
      },
      {
        'dateMoviment': '2018-11-07 21:51:03',
        'coin': 'BTC',
        'proft': '0.668255',
        'profitPercentage': 38
      },
    ]);
  }));

});
