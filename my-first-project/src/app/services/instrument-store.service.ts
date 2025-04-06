import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { MOCK_CONTENT} from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  [x: string]: any;
  private contentArray: Product[] = MOCK_CONTENT;


  getAllContent(): Observable<Product[]> {
    return of(this.contentArray);
  }


  getContentById(id: number): Observable<Product | undefined> {
    const item = this.contentArray.find(content => content.id === id);
    return of(item);
  }


  addContent(newContent: Product): Observable<Product[]> {
    this.contentArray.push(newContent);
    return of(this.contentArray);
  }


  updateContent(updatedContent: Product): Observable<Product[]> {
    const index = this.contentArray.findIndex(content => content.id === updatedContent.id);
    if (index !== -1) {
      this.contentArray[index] = updatedContent;
    }
    return of(this.contentArray);
  }


  deleteContent(id: number): Observable<Product | undefined> {
    const index = this.contentArray.findIndex(content => content.id === id);
    if (index !== -1) {
      const removedItem = this.contentArray.splice(index, 1)[0];
      return of(removedItem);
    }
    return of(undefined);
  }
}
