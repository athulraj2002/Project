import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

export interface jobs {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],

})


export class FormsComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;


  Jobs1: jobs[] = [
   {value: 'gvt', viewValue: 'Government Job'},
   {value: 'pvt', viewValue: 'Private Job'},
   {value: 'abroad', viewValue: 'Abroad'},
   {value: 'other', viewValue: 'Other'}
 ];
 Jobs2: jobs[] = [
  {value: 'gvt', viewValue: 'Government Job'},
  {value: 'pvt', viewValue: 'Private Job'},
  {value: 'abroad', viewValue: 'Abroad'},
  {value: 'hm', viewValue: 'Home Maker'},
  {value: 'other', viewValue: 'Other'}
];
seasons: string[] = ['1', '2', '3', '4' ,'5 '];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });

  }
}
