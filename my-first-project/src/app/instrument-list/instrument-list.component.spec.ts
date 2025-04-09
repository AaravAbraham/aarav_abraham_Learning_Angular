import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';  // Import RouterTestingModule
import { InstrumentListComponent } from './instrument-list.component';
import { InstrumentListItemComponent } from '../instrument-list-item/instrument-list-item.component'; 

describe('InstrumentListComponent', () => {
  let component: InstrumentListComponent;
  let fixture: ComponentFixture<InstrumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,InstrumentListComponent], 
      declarations: [, InstrumentListItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
