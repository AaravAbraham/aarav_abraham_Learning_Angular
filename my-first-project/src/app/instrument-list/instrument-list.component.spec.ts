import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentListComponent } from './instrument-list.component';
import { CommonModule } from '@angular/common';
import { InstrumentListItemComponent } from '../instrument-list-item/instrument-list-item.component';

describe('InstrumentListComponent', () => {
  let component: InstrumentListComponent;
  let fixture: ComponentFixture<InstrumentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule], // CommonModule is necessary for structural directives like ngFor
      declarations: [InstrumentListComponent, InstrumentListItemComponent], // Declare both components
    });
    fixture = TestBed.createComponent(InstrumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
