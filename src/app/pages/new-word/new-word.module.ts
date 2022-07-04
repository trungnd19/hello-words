import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewWordComponent } from './new-word.component';
import { NewWordRoutingModule } from './new-word-routing.module';



@NgModule({
  declarations: [
    NewWordComponent
  ],
  imports: [
    CommonModule,
    NewWordRoutingModule
  ]
})
export class NewWordModule { }
