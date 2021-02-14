import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedStockPageRoutingModule } from './selected-stock-routing.module';

import { SelectedStockPage } from './selected-stock.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SelectedStockPageRoutingModule
  ],
  declarations: [SelectedStockPage]
})
export class SelectedStockPageModule {}
