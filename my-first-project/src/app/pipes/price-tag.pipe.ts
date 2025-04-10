import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceTag'
})
export class PriceTagPipe implements PipeTransform {
  constructor() {
    console.log('Custom Pipe Initialized - Version 2.0');
  }

  transform(price: number): string {
    if (price < 500) {
      return `${price} - Budget`;
    } else if (price < 1000) {
      return `${price} - Midrange`;
    } else {
      return `${price} - Premium`;
    }
  }
}