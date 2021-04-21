import { Component, OnInit } from '@angular/core';
import {Products} from "./all-products"
import {ProductsService} from "../products.service"
import {List} from "./list"

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {
products: List[] = [];
  constructor() { }
  // selectedProduct?: List;
  // onSelect(product: List): void {
  //   this.selectedProduct = product;
  // }
  ngOnInit(): void {
  }

}
