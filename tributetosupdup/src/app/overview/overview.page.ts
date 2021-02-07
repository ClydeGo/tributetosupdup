import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(private menu: MenuController) {
  }

  ngOnInit() {
    this.menu.close();
  }

  ionViewWillEnter() {
    this.menu.close();
  }

}
