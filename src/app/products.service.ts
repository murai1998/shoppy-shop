import { Injectable } from '@angular/core';
import {List} from "./pr-list/list";
import {Products} from "./pr-list/all-products"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): List[]{
    return Products;
  }
}
