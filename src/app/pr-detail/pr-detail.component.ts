import { ProductsService } from './../products.service';
import { Component, OnInit, Input  } from '@angular/core';
import {List} from "../pr-list/list";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})
export class PrDetailComponent implements OnInit {
  product: List = <List>{};;
  constructor(private productService: ProductsService,  private location: Location,   private route: ActivatedRoute,) { 
  
  }

  ngOnInit(): void {
   this.getProduct();
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
}
