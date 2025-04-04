import { Product } from '../models/product';

export class InstrumentListComponent {
   accesories : Product[]= [
      { id: 1, name: 'Bag', type: 'String', price: 49 },
      { id: 2, name: 'Pedal', type: 'String', price: 299 },
      { id: 3, name: 'Case', type: 'Percussion', price: 699 },
      { id: 4, name: 'Strings', type: 'Wind', price: 199},
   ]

}