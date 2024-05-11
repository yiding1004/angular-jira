import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';

const JiraControlComponents = [
  AvatarComponent,
  SvgIconComponent,
  SvgDefinitionsComponent,
];

@NgModule({
  declarations: [...JiraControlComponents],
  imports: [CommonModule],
  exports: [...JiraControlComponents],
})
export class JiraControlModule {}
