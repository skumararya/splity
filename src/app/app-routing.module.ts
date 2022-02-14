import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormPageComponent } from './modules/search-form-page/search-form-page.component';
import { ProductListPageComponent } from './modules/product-list-page/product-list-page.component';

const routes: Routes = [

{path:'searcform',component:SearchFormPageComponent},
{path:'productlist',component:ProductListPageComponent},

{path:'', redirectTo: 'searcform', pathMatch: 'full' },
{
  path: '**',
  redirectTo: 'searcform',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
