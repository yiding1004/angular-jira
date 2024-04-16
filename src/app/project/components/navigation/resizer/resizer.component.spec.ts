import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizerComponent } from './resizer.component';

describe('ResizerComponent', () => {
  let component: ResizerComponent;
  let fixture: ComponentFixture<ResizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResizerComponent]
    });
    fixture = TestBed.createComponent(ResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
