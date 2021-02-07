import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MainHeaderComponent } from '../components/main-header/main-header.component';


@NgModule({
  declarations: [MainHeaderComponent],
  entryComponents: [],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [],
  exports: [MainHeaderComponent]
})
export class SharedModule {}
