import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StoreService } from '../services/instrument-store.service';
import { NgForOf } from '@angular/common';
import { MOCK_CONTENT } from '../data/mock-content';

@Component({
  selector: 'app-instrument-list', 
  imports:[NgForOf,InstrumentListComponent],
  templateUrl: './instrument-list.component.html',
  styleUrl: './instrument-list.component.scss'
})
export class InstrumentListComponent implements OnInit {
   accessories: Product[] = MOCK_CONTENT;
 
   constructor(private storeService: StoreService) {}
 
   ngOnInit(): void {
     this.storeService.getAllContent().subscribe(data => {
       this.accessories = data;
     });
   }
 }
