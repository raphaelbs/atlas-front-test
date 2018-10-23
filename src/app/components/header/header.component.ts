import { Component } from '@angular/core';

import { IUser } from './../../modules/core/interfaces/user.interface';
import { USER } from './../../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: IUser = USER;

  constructor() { }

}
