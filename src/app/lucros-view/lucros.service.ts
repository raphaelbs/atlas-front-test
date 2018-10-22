import { IDailyProfit } from './daily-profit.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IDailyProfitDto } from './daily-profit.dto.interface';

@Injectable()
export class LucrosService {

  constructor(private httpClient: HttpClient) { }

  getLucros() {
    return this.httpClient.get('http://www.mocky.io/v2/5b2c010d300000100023487a')
      .pipe(
        map((dailyProfits: IDailyProfit[]) =>
          dailyProfits
            .map((dailyProfit) => ({
              date: new Date(dailyProfit.dateMoviment),
              coin: dailyProfit.coin,
              income: parseFloat(dailyProfit.proft),
              percent: parseFloat(dailyProfit.profitPercentage),
              ammount: parseFloat(dailyProfit.proft)
            }) as IDailyProfitDto)
            .sort((date1, date2) => date1.date > date2.date ? 1 : -1)
            .map((dailyProfit, index, refArray) => {
              dailyProfit.ammount =
                index > 0 ?
                  refArray[index - 1].ammount + dailyProfit.ammount :
                  dailyProfit.income / dailyProfit.percent;
              return dailyProfit;
            })
        )
      );
  }

}
