import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide.component';
import { GuideRoutingModule } from './guide-routing.module';



@NgModule({
  declarations: [
    GuideComponent
  ],
  imports: [
    CommonModule,
    GuideRoutingModule
  ]
})
export class GuideModule { }
