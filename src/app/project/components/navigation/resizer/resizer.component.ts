import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss']
})
export class ResizerComponent {
  @Input() expended!: boolean;

  get icon() {
    return this.expended ? 'chevron-left' : 'chevron-right';
  }

  constructor() {}
}
