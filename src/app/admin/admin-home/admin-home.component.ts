import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

export interface Semester {
  value: string;
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  semester: Semester[] = [
      {value: 's5'},
      {value: 's6'},
      {value: 's7'},
      {value: 's8'},

    ];
}
