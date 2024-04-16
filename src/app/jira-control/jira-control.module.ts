import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';

const JiraControlComponents = [ AvatarComponent ];

@NgModule({
  declarations: [
    ...JiraControlComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...JiraControlComponents
  ]
})
export class JiraControlModule { }
