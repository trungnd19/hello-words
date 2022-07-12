import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWordsListComponent } from './my-words-list.component';
import { MyWordsListRoutingModule } from './my-words-list-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MyWordsListComponent
  ],
  imports: [
    CommonModule,
    MyWordsListRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class MyWordsListModule { }
