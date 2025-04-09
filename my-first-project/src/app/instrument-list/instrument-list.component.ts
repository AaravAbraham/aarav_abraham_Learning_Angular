import { Component } from '@angular/core';
import { Product } from '../models/product';
import { MOCK_CONTENT } from '../data/mock-content'; 
import { NgFor } from '@angular/common';
import { InstrumentListItemComponent } from '../instrument-list-item/instrument-list-item.component';
import { StoreService } from '../services/instrument-store.service';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss'],
  imports: [NgFor, InstrumentListItemComponent],
  standalone: true
})

export class InstrumentListComponent {
  accessories: Product[] = MOCK_CONTENT; 
}