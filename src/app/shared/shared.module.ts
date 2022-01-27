import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SharedModule { }
