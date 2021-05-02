import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import {Products} from "./all-products"
import {ProductsService} from "../products.service"
import {List} from "./list"
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {
  selectedProduct?: List;
products: List[] = [];
  constructor(private productsService: ProductsService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: List): void {
    this.selectedProduct = product;
    this.messageService.add(`ProductsComponent: Selected product id=${product.id}`);
  }
  getProducts(): void{
    this.productsService.getProducts().subscribe(products => this.products = products)
  }
 

}
