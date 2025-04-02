import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/app_interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-project';
    myName: string = "Aarav Abraham";
    myCourse: string = "MAD 307 - JavaScript Frameworks";
    products: Product[] = [
      { id: 1, name: 'Guitar', price: 450, category: 'String',  },
      { id: 2, name: 'Drums', price: 799, category: 'Purcussion' },
      { id: 3, name: 'Flute', price: 199, category: 'Wind', description: 'Steel type 18 tabs flute' },
      { id: 4, name: 'Electric Guitar', price: 49, category: 'Electronics',description: 'Gibson 7 string guitar s=with tremolo' },
      { id: 5, name: 'Keyboard', price: 299, category: 'Electronics', description: 'Electronic Keyboard with 106 types of music samples' },
      { id: 6, name: 'Violin', price: 249, category: 'String' }
    ];
  }
  
