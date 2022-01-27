import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultPageComponent } from './views/result-page/result-page.component';
import { SearchPageComponent } from './views/search-page/search-page.component';

const routes: Routes = [
  {
    path:"",
    component:SearchPageComponent
  },
  {
    path:"search",
    component:ResultPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
