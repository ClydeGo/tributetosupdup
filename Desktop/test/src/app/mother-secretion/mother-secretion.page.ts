import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mother-secretion',
  templateUrl: './mother-secretion.page.html',
  styleUrls: ['./mother-secretion.page.scss'],
})
export class MotherSecretionPage implements OnInit {

  saveApi = '/mother/addMeasurement';
  getSummaryApi = '/mother/getMeasurementSummary';

  //  info: any;
  formGroup: FormGroup;
  options = {};
  hasMaternityCard = false;

  fields = {};

  keyboardShown = false;

    // values for change time
    maxDate: string;
    maxTime: string;
    error = false;
    dateHolder: string;
    tempTime: string;
    tempDate: string;


  constructor(
  ) {
    
    this.fields = {
      timestamp: { formControl: new FormControl(''), showConfirmation: false },
    };
    this.formGroup = new FormGroup({});
    Object.keys(this.fields).forEach((key) => {
      this.formGroup.addControl(key, this.fields[key].formControl);
    });

    this.options = {
    };

    // populate option lists
    // Object.keys(this.options).forEach((key) => {
    //   this.commonService.retrieveLOV(key).subscribe(res => {
    //     this.options[key] = this.commonService.getTranslateKeyList(res.data);
    //   });
    // });
  }

  ionViewWillEnter(){
    // this.workflow.setCurrentPage(this);
    //this.maxTime = this.maxDate.substring(11, 16);
    //this.formGroup.get('timestamp').setValue(this.maxDate);
  }

  ngOnInit() {
    // this.workflow.setCurrentPage(this);
    // this.formGroup.controls.timestamp.setValue(this.commonService.getISOTimeNow());
    // this.hasMaternityCard = this.workflow.hasMaternityCard();

    // this.commonService.disableInputCorrections();
  }

  save() {
    // console.log(this.formGroup.controls.weight);
    // console.log(this.formGroup.get('weight').value);
    // this.formGroup.controls.saveToMaternityCard.markAsDirty();
    // this.actions.save(this);
  }

  cancel() {
    // this.actions.cancel(this);
  }

  isSaveEnabled(): boolean {
    if (this.error){
      return false;
    }
    const v = this.formGroup.valid && this.formGroup.dirty;
    // this.workflow.unsaved = v;
    return v;
  }

  backPressed() {
    this.cancel();
  }

  openSummary() {
    // this.actions.summary(this);
  }

  checkPeriod(formControl: any) {
    console.log(formControl);
    const n = formControl.value.toString();
    const lastChar = n.substr(n.length - 1); // => "1"
    console.log(lastChar, lastChar === '.');
    if (lastChar === '.') {
      formControl.setErrors({ 'invalid': true });
    }
  }

  detectError($event){
    this.error = $event;
  }

  openChart(){}
}
