import { Component, OnInit } from '@angular/core';
import { MENU, IMenuItem } from './../menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menu: IMenuItem[] = MENU;

  constructor() { }

  ngOnInit() {
  }

}
