import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/new-word/new-word.module").then((m) => m.NewWordModule),
  },
  // {
  //   path: "new-word",
  //   loadChildren: () =>
  //     import("./pages/new-word/new-word.module").then((m) => m.NewWordModule),
  // },
  {
    path: "my-words-list",
    loadChildren: () =>
      import("./pages/my-words-list/my-words-list.module").then((m) => m.MyWordsListModule),
  },
  {
    path: "guide",
    loadChildren: () =>
      import("./pages/guide/guide.module").then((m) => m.GuideModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
