import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PriceTagPipe } from '../pipes/price-tag.pipe'; 
import { Product } from '../models/product';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { HighlightOnFocusDirective } from '../components/highlight-on-focus.directive';
@Component({
  selector: 'app-instrument-list-item',
  standalone: true,
  imports: [CommonModule, PriceTagPipe,HoverHighlightDirective,HighlightOnFocusDirective], 
  templateUrl: './instrument-list-item.component.html',
  styleUrls: ['./instrument-list-item.component.scss']
})
export class InstrumentListItemComponent {
  @Input() product!: Product;
  today: Date = new Date(); 
}
