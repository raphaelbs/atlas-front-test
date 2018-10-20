import { Component, OnInit, Input } from '@angular/core';
import { IMenuItem } from './../../interfaces/menu-item.interface';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent implements OnInit {

  @Input() item: IMenuItem;

  constructor() { }

  ngOnInit() {
  }

}
