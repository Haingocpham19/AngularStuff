import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ThucDonComponent} from './thuc-don/thuc-don.component';
import { MonAnComponent } from './mon-an/mon-an.component';

const routes: Routes = [
  {path:'thuc-don',component: ThucDonComponent},
  {path:'mon-an',component: MonAnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
