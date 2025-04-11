import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { InstrumentListItemComponent } from './instrument-list-item/instrument-list-item.component'; 
import { routes } from './app.routes'; 
import { RouterModule } from '@angular/router';
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { HighlightOnFocusDirective } from './components/highlight-on-focus.directive';
@NgModule({
  declarations: [
    HighlightOnFocusDirective,
    HoverHighlightDirective,
    AppComponent,
    InstrumentListComponent,
    InstrumentListItemComponent ,
    ModifyListItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }