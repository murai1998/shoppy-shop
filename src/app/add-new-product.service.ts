import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddNewProductService {

favs: string[] = ["Ipad", "Charger"];

getFavs(): string[]{
  return this.favs;
}
addNewFav(argum: string){
this.favs.push(argum);
}
  constructor() { }
}
