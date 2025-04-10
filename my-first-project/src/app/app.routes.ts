import { Routes } from '@angular/router';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: InstrumentListComponent },
  { path: 'edit/:id', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];
