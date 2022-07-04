import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyWordsListComponent } from "./my-words-list.component";

const routes: Routes = [
  {
    path: "",
    component: MyWordsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWordsListRoutingModule {}
