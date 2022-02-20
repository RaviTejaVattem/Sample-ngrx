import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './reducer';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ product: addProductReducer }),
  ],
  declarations: [AppComponent, HelloComponent, ProductComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
