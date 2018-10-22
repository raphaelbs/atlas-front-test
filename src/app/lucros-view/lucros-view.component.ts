import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lucros-view',
  templateUrl: './lucros-view.component.html',
  styleUrls: ['./lucros-view.component.scss']
})
export class LucrosViewComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('pt-BR');
  }

  ngOnInit() {
  }

}
