import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-blood-detail',
  templateUrl: './blood-detail.page.html',
  styleUrls: ['./blood-detail.page.scss'],
})
export class BloodDetailPage implements OnInit {

  data: any;
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private getData: GetDataService) {
    this.route.queryParams.subscribe(params => {
        this.id = this.router.getCurrentNavigation().extras.state.data;
        
        this.getData.getBloodDeatil(this.id).subscribe(x => {
          this.data = x.data;
        });
    });


  }

  ngOnInit() {
  }

}
