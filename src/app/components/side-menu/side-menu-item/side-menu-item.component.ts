import { Component, Input } from '@angular/core';

import { IMenuItem } from './../../../modules/core/interfaces/menu-item.interface';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent {

  @Input() item: IMenuItem;

  constructor() { }

}
