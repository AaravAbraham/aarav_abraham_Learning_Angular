import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Product } from '../models/product';
import { MOCK_CONTENT } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private contentSubject = new BehaviorSubject<Product[]>(MOCK_CONTENT);
  content$ = this.contentSubject.asObservable();

  constructor() {}

  getAllContent(): Observable<Product[]> {
    return this.content$;
  }

  getContentById(id: number): Observable<Product | undefined> {
    const item = this.contentSubject.value.find(content => content.id === id);
    return of(item);
  }

  addContent(newContent: Product): Observable<Product[]> {
    this.contentSubject.next([...this.contentSubject.value, newContent]);
    return this.content$;
  }

  updateContent(updatedContent: Product): Observable<Product[]> {
    const updatedContentArray = this.contentSubject.value.map(content =>
      content.id === updatedContent.id ? updatedContent : content
    );
    this.contentSubject.next(updatedContentArray);
    return this.content$;
  }

  deleteContent(id: number): Observable<Product | undefined> {
    const updatedContentArray = this.contentSubject.value.filter(content => content.id !== id);
    const deletedItem = this.contentSubject.value.find(content => content.id === id);
    this.contentSubject.next(updatedContentArray);
    return of(deletedItem);
  }
}
