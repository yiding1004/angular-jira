import { Component, Input } from '@angular/core';

@Component({
  selector: 'j-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() avatarUrl: string | undefined;
  @Input() size = 12;
  @Input() className = '';

  get style() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      'background-image': `url('${this.avatarUrl}')`,
      'border-radius': '100%'
    };
  }
}
