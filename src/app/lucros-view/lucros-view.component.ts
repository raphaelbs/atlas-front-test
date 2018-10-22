import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDailyProfit } from './daily-profit.interface';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-lucros-view',
  templateUrl: './lucros-view.component.html',
  styleUrls: ['./lucros-view.component.scss']
})
export class LucrosViewComponent implements OnInit {

  displayedColumns: string[] = ['date', 'coin', 'income', 'percent', 'ammount'];
  dataSource: MatTableDataSource<IDailyProfit>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('pt-BR');
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<IDailyProfit>([
      {
        'dateMoviment': new Date('2018-11-07 21:51:03'),
        'coin': 'BTC',
        'proft': 0.668255,
        'profitPercentage': 38
      },
      {
        'dateMoviment': new Date('2019-01-05 14:12:55'),
        'coin': 'BTC',
        'proft': 2.725550,
        'profitPercentage': 35
      },
    ]
    .sort((date1, date2) => new Date(date1.dateMoviment) > new Date(date2.dateMoviment) ? 1 : -1)
    .map((dailyProfit) => ({
      date: dailyProfit.dateMoviment,
      coin: dailyProfit.coin,
      income: dailyProfit.proft,
      percent: dailyProfit.profitPercentage,
      ammount: dailyProfit.proft
    }) as IDailyProfit)
    .map((dailyProfit, index, refArray) => {
      dailyProfit.ammount =
        index > 0 ?
          refArray[index - 1].ammount + dailyProfit.ammount :
          dailyProfit.income / dailyProfit.percent;
      return dailyProfit;
    }));
    this.dataSource.paginator = this.paginator;
  }

  filter(search: string) {
    this.dataSource.filter = search.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
