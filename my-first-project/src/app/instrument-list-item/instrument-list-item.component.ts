import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { PriceTagPipe } from '../pipes/price-tag.pipe'; // ✅ Import your custom pipe
import { Product } from '../models/product';

@Component({
  selector: 'app-instrument-list-item',
  standalone: true,
  imports: [CommonModule, PriceTagPipe], // ✅ Add both
  templateUrl: './instrument-list-item.component.html',
  styleUrls: ['./instrument-list-item.component.scss']
})
export class InstrumentListItemComponent {
  @Input() product!: Product;
  today: Date = new Date(); // for the date pipe
}
