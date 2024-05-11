import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() expended!: boolean;
  @Output() manulToggle = new EventEmitter();

  constructor() {}

  toggle() {
    this.manulToggle.emit();
  }

}
