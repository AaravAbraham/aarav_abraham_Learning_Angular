import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-instrument-list-item',
  imports: [NgIf],
  templateUrl: './instrument-list-item.component.html',
  styleUrl: './instrument-list-item.component.scss'
})
export class InstrumentListItemComponent {

  @Input() product! : Product;

}
