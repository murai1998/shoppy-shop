import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrListComponent } from './pr-list/pr-list.component';
import { PrDetailComponent } from './pr-detail/pr-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PrListComponent,
    PrDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, PrListComponent]
})
export class AppModule { }
