import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-instrument-list-item',
  imports: [],
  templateUrl: './instrument-list-item.component.html',
  styleUrl: './instrument-list-item.component.scss'
})
export class InstrumentListItemComponent {
  @Input() product! : Product;

}
