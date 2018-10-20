import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: {
    avatar: string;
    name: string;
  } = {
    avatar: 'assets/ic_person.svg',
    name: 'Manoel Neto'
  };

  constructor() { }

  ngOnInit() {
  }

}
