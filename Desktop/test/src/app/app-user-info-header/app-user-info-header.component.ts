import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-info-header',
  templateUrl: './app-user-info-header.component.html',
  styleUrls: ['./app-user-info-header.component.scss'],
})
export class AppUserInfoHeaderComponent implements OnInit {

  @Input()
  patient: any = undefined;
  @Input() toolbarbackground = '#0099d3';
  text: string;
  patientLastname: string;
  patientFirstname: string;
  patientType: any;
  gender: string;
  patientId: string;
  ssn: string;

  constructor(
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // this.patient = this.workflow.getPatient();
    this.patientLastname = 'test';
    this.patientFirstname = 'test';
    this.patientType = 'test';
    this.patientId = 'test';
    this.ssn = 'test';
  }

  get getpatientType(): any {
    return this.patientType;
  }

}
