import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PriceTagPipe } from '../pipes/price-tag.pipe'; 
import { Product } from '../models/product';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { HighlightOnFocusDirective } from '../components/highlight-on-focus.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card'; 
@Component({
  selector: 'app-instrument-list-item',
  standalone: true,
  imports: [CommonModule, PriceTagPipe,HoverHighlightDirective,HighlightOnFocusDirective,
    MatFormFieldModule,MatInputModule,MatCardModule,MatButtonModule,MatTooltipModule
  ], 
  templateUrl: './instrument-list-item.component.html',
  styleUrls: ['./instrument-list-item.component.scss']
})
export class InstrumentListItemComponent {
  @Input() product!: Product;
  today: Date = new Date(); 
}
