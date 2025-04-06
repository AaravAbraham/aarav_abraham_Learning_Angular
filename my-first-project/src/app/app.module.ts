import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { InstrumentListItemComponent } from './instrument-list-item/instrument-list-item.component'; 

@NgModule({
  declarations: [
    AppComponent,
    InstrumentListComponent,
    InstrumentListItemComponent
  ],
  imports: [
    BrowserModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
