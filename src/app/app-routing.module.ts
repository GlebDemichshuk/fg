import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./core/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/main-layout/main-layout.component')
      .then((m) => m.MainLayoutComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
