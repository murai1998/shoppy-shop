import { AddNewProductService } from './../add-new-product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [AddNewProductService]
})
export class AddProductComponent implements OnInit {

 
  favPr: string[] = []; 
  handleAdd() {
   let arr: string[] = this.favPr;
    if(arr.length > 0){
      this.favPr = []
    }
    else{
    this.favPr = this.addService.getFavs();
    }
  }

  addNewItem(my_form: any){
    this.addService.addNewFav(my_form.value.fav);
    my_form.reset()
  }
  constructor(private addService: AddNewProductService) { }

  ngOnInit(): void {
  }

}
