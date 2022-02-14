import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormPageComponent } from './modules/search-form-page/search-form-page.component';
import { ProductListPageComponent } from './modules/product-list-page/product-list-page.component';
import { HeaderComponent } from './modules/header/header.component';
import { MyDatePickerModule } from 'mydatepicker';
import { PaginationComponent } from './modules/pagination/pagination.component';
import { ModulePipe } from './filterpipe/module.pipe';

//import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormPageComponent,
    ProductListPageComponent,
    HeaderComponent,
    PaginationComponent,
    ModulePipe,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MyDatePickerModule,HttpClientModule ,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
