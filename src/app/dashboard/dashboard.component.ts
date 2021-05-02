import { ProductsService } from './../products.service';
import { List } from './../pr-list/list';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
products: List [] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void{
    this.productsService.getProducts().subscribe(products => this.products = products.slice(0, 4))
  }

}
