import { AddProductComponent } from './add-product/add-product.component';
import { PrDetailComponent } from './pr-detail/pr-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrListComponent } from './pr-list/pr-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/best-sellers', pathMatch: 'full' },
  {path: "products", component: PrListComponent},
  {path: "best-sellers", component: DashboardComponent},
  {path: "description/:id", component: PrDetailComponent},
  {path: 'add-new-pr', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
