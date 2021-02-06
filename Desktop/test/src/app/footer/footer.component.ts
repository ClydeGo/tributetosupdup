import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Input() page: any;
  @Input() showChartButton: boolean;

  keyboardShown = false;

  
  constructor(

  ) {}

  isKeyboardUp() {

    return false;
  }

  ngOnInit() {
  }

  save() {
    this.page.save();
  }

  cancel() {
    this.page.cancel();
  }

  openSummary() {
    this.page.openSummary();
  }

  openChart() {
    this.page.openChart();
  }

}
