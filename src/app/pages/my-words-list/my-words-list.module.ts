import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWordsListComponent } from './my-words-list.component';
import { MyWordsListRoutingModule } from './my-words-list-routing.module';



@NgModule({
  declarations: [
    MyWordsListComponent
  ],
  imports: [
    CommonModule,
    MyWordsListRoutingModule
  ]
})
export class MyWordsListModule { }
