import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodDetailPage } from './blood-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BloodDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodDetailPageRoutingModule {}
