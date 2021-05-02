import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import {List} from "./pr-list/list";
import {Products} from "./pr-list/all-products"
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<List[]>{
    const products = of (Products);
    this.messageService.add("ProductsService: fetched data")
    return products;
  }

  getProduct(id: number): Observable<List> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = Products.find(h => h.id === id) as List;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
