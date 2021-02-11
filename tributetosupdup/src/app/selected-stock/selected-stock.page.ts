import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-stock',
  templateUrl: './selected-stock.page.html',
  styleUrls: ['./selected-stock.page.scss'],
})
export class SelectedStockPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
  }

}
