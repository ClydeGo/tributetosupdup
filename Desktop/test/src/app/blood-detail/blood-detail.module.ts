import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodDetailPageRoutingModule } from './blood-detail-routing.module';

import { BloodDetailPage } from './blood-detail.page';
import { AppUserInfoHeaderComponent } from '../app-user-info-header/app-user-info-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodDetailPageRoutingModule
  ],
  declarations: [BloodDetailPage, AppUserInfoHeaderComponent]
})
export class BloodDetailPageModule {}
