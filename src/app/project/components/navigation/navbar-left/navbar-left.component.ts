import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss'],
})
export class NavbarLeftComponent implements OnInit {
  items!: NavItem[];
  user = {
    id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
    name: 'Trung Vo',
    avatarUrl:
      'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1593253478/trung-vo_bioxmc.png',
    createdAt: '2020-06-16T16:00:00.000Z',
    updatedAt: '2020-06-16T16:00:00.000Z',
  };

  constructor() {}

  ngOnInit(): void {
    this.items = [
      new NavItem('search', 'Search issues'),
      new NavItem('plus', 'Create issue'),
    ];
  }
}

class NavItem {
  constructor(public icon: string, public tooltip: string) {}
}


