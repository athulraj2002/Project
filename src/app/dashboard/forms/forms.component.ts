import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

export interface jobs {
  value: string;
  viewValue: string;
}
export interface semesters{
  value:string;
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

Semester:semesters[]=[
  {value:'s1'},
  {value:'s2'},
  {value:'s3'},
  {value:'s4'},
  {value:'s5'},
  {value:'s6'},
  {value:'s7'},
  {value:'s8'}
];
  Batches: jobs[] = [
   {value: '2015-2019', viewValue: '2015-2019'},
   {value: '2016-2020', viewValue: '2016-2020'},
   {value: '2017-2021', viewValue: '2017-2021'},
   {value: '2018-2022', viewValue: '2018-2022'}
 ];
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
      gender: ['male', Validators.required],
      mobnum: ['', Validators.required],
      age: ['', Validators.required],
      adrs: ['', Validators.required],
      fath_occup: ['', Validators.required],
      moth_occup: ['', Validators.required],
      daysch_host: ['daysch', Validators.required],
      backlogs: ['', Validators.required],
      Batch: ['', Validators.required],
      sem: ['', Validators.required]
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
