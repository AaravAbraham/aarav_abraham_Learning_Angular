import { Component } from '@angular/core';
import { Product } from '../models/product';
import { InstrumentListItemComponent } from '../instrument-list-item/instrument-list-item.component';

@Component({
  selector: 'app-instrument-list',
  standalone: true,
  imports: [],
  templateUrl: './instrument-list.component.html',
  styleUrl: './instrument-list.component.scss'
})
export class InstrumentListComponent {
   accesories : Product[]= [
      { id: 1, name: 'Bag', type: 'String', price: 49 },
      { id: 2, name: 'Pedal', type: 'String', price: 299 },
      { id: 3, name: 'Case', type: 'Percussion', price: 699 },
      { id: 4, name: 'Strings', type: 'Wind', price: 199},
   ]

}
