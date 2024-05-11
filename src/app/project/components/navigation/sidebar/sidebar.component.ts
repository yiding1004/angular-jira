import { Component, OnInit, Input } from '@angular/core';
import { SidebarLink } from '@yiding1004/interface/ui-model/sidebar-link';
import { SidebarLinks } from '@yiding1004/project/config/sidebars';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() expended!: boolean;

  get sidebarWidth(): number {
    return this.expended ? 240 : 15;
  }
  sidebarlinks: SidebarLink[] = [];

  ngOnInit() {
    this.sidebarlinks = SidebarLinks;
  }
}
