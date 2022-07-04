import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
