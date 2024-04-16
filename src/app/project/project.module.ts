import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { BoardComponent } from './pages/board/board.component';
import { ProjectComponent } from './project.component';
import { NavigationComponents } from './components/navigation';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { icons } from './config/icons';
import { JiraControlModule } from '../jira-control/jira-control.module';


@NgModule({
  declarations: [
    BoardComponent,
    ProjectComponent,
    ...NavigationComponents,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzIconModule.forChild(icons),
    NzToolTipModule,
    NzPopoverModule,
    JiraControlModule
  ]
})
export class ProjectModule { }
