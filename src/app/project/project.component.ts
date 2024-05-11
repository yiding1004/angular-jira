import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  expended: boolean = true;

  manulToggle() {
    this.expended = !this.expended;
  }
}
