import { Product } from './model';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select((state) => state.product);
  }

  addProduct(name, price) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product>{
        name: name,
        price: price,
      },
    });
  }

  ngOnInit() {}
}
