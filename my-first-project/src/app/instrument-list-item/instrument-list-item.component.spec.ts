import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstrumentListComponent } from '../instrument-list/instrument-list.component';
import { InstrumentListItemComponent } from '../instrument-list-item/instrument-list-item.component'; // Adjust the path as necessary

describe('InstrumentListComponent', () => {
  let component: InstrumentListComponent;
  let fixture: ComponentFixture<InstrumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstrumentListComponent, InstrumentListItemComponent] // Ensure both components are declared
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});