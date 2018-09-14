import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { App1Component} from './app.comp1';
import { ProductListComponent} from './Products/Product-list.component';
import { ConvertToSpacePipe } from './shared/Product-Pipe'; 
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
