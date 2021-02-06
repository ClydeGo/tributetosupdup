import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedStockPage } from './selected-stock.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedStockPageRoutingModule {}
