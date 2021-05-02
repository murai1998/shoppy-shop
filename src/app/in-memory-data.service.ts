import { List } from './pr-list/list';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: 'Lenovo', description: "Laptop" },
      { id: 12, name: 'Dell', description: "PC" },
     
    ];
    return {products};
  }

  genId(products: List[]): number {
    return products.length > 0 ? Math.max(...products.map(pr => pr.id)) + 1 : 11;
  }
}