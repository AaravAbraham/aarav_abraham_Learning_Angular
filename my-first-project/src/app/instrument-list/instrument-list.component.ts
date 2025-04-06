import { Component } from '@angular/core';
import { Product } from '../models/product';
import { MOCK_CONTENT } from '../data/mock-content'; 

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss'],
  imports: [] 
})
export class InstrumentListComponent {
  accessories: Product[] = MOCK_CONTENT; 
}