import { Component } from '@angular/core';
import { Product } from './models/product'; 
import { NgFor } from '@angular/common';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { StoreService } from './services/instrument-store.service';
import {RouterLinkActive,RouterOutlet,RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  imports:[NgFor,InstrumentListComponent,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'my-first-project';
  myName: string = "Your Name";
  myCourse: string = "MAD 307 - JavaScript Frameworks";

  products: Product[] = [
    { id: 1, name: 'Guitar', type: 'String', price: 499, description: 'Acoustic guitar with excellent sound quality.' },
    { id: 2, name: 'Piano', type: 'String', price: 2999, description: 'Grand piano with rich tones and elegant design.' },
    { id: 3, name: 'Drums', type: 'Percussion', price: 699, description: 'Complete drum set for beginners.' },
    { id: 4, name: 'Flute', type: 'Wind', price: 199, description: 'Silver flute with bright, clear sound.' },
    { id: 5, name: 'Violin', type: 'String', price: 799, description: 'Classical violin, handcrafted with fine wood.' },
    { id: 6, name: 'Trumpet', type: 'Brass', price: 399, description: 'High-quality brass trumpet for professional use.' }
  ];
  
  router: any;
  constructor(private storeService: StoreService) {}

  

  ngOnInit() {
    this.storeService.getAllContent().subscribe(items => {
      this.products = items;
    });
  }

  editItem(id: number) {
    this.router.navigate(['/edit', id]); 
  }

  deleteItem(id: number) {
    this.storeService.deleteContent(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id);
    });
  }
}
