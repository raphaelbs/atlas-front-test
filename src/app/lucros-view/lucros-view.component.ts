import { IDailyProfitDto } from './daily-profit.dto.interface';
import { LucrosService } from './lucros.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-lucros-view',
  templateUrl: './lucros-view.component.html',
  styleUrls: ['./lucros-view.component.scss']
})
export class LucrosViewComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['date', 'coin', 'income', 'percent', 'ammount'];
  dataSource: MatTableDataSource<IDailyProfitDto>;
  subscription = new Subscription();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private translateService: TranslateService,
    private lucrosService: LucrosService
    ) {
    this.translateService.setDefaultLang('pt-BR');
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<IDailyProfitDto>();
    this.dataSource.paginator = this.paginator;
    this.subscription.add(
      this.lucrosService.getLucros()
      .subscribe(dailyProfits => {
        this.dataSource.data = dailyProfits;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(search: string) {
    this.dataSource.filter = search.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
