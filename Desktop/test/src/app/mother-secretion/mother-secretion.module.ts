import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotherSecretionPageRoutingModule } from './mother-secretion-routing.module';

import { MotherSecretionPage } from './mother-secretion.page';
import { AppUserInfoHeaderComponent } from '../app-user-info-header/app-user-info-header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotherSecretionPageRoutingModule
  ],
  declarations: [MotherSecretionPage, FooterComponent]
})
export class MotherSecretionPageModule {}
