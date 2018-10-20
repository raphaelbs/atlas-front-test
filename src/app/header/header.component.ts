import { Component, OnInit } from '@angular/core';
import { IUser } from './../interfaces/user.interface';
import { USER } from './../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: IUser = USER;

  constructor() { }

  ngOnInit() {
  }

}
