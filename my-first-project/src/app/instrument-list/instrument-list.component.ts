import { Component } from '@angular/core';
import { Product } from '../models/product';
import { MOCK_CONTENT } from '../data/mock-content'; 
import { NgFor } from '@angular/common';
import { InstrumentListItemComponent } from '../instrument-list-item/instrument-list-item.component';
import { StoreService } from '../services/instrument-store.service';
import { Router } from '@angular/router';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { HighlightOnFocusDirective } from '../components/highlight-on-focus.directive';
@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss'],
  imports: [NgFor, InstrumentListItemComponent,HoverHighlightDirective,HighlightOnFocusDirective],
  standalone: true
})

export class InstrumentListComponent {
  accessories: Product[] = MOCK_CONTENT; 
  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.storeService.getAllContent().subscribe(items => {
      this.accessories = items;
    });
  }

  editItem(id: number) {
    this.router.navigate(['/edit', id]); 
  }

  deleteItem(id: number) {
    this.storeService.deleteContent(id).subscribe(() => {
      this.accessories = this.accessories.filter(item => item.id !== id);
    });
  }
}