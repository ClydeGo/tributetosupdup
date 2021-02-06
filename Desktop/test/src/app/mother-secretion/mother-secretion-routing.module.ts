import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotherSecretionPage } from './mother-secretion.page';

const routes: Routes = [
  {
    path: '',
    component: MotherSecretionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotherSecretionPageRoutingModule {}
