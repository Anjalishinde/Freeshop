import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetPagePage } from './forget-page.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetPagePageRoutingModule {}
