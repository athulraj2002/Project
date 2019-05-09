import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-predicted',
  templateUrl: './predicted.component.html',
  styleUrls: ['./predicted.component.scss']
})
export class PredictedComponent implements OnInit {
  ElectiveData:any;
  divopen:boolean=false;
  constructor(private http: HttpClient ) { }

  ngOnInit() {
  }
  getElective() {

    this.http.get('http://127.0.0.1:5002/elPred/B/A/B+/B+/B/B+/').subscribe((val) => {

      this.ElectiveData=val;


    });
    this.divopen=(!this.divopen);
  }

}
