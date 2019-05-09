import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import {AuthService} from '../../home/auth.service';

@Component({
  selector: 'app-predicted',
  templateUrl: './predicted.component.html',
  styleUrls: ['./predicted.component.scss']
})
export class PredictedComponent implements OnInit {
  ElectiveData:any;
  divopen:boolean=false;
  constructor(private http: HttpClient,private authservice:AuthService ) { }

  ngOnInit() {
  }
  getElective() {
        let grades=this.authservice.getGrades();
        console.log(grades);
    this.http.get('http://127.0.0.1:5002/elPred/'+grades['HS200']+'/'+grades['MA202']+'/'+grades['CS202']+'/'+grades['CS204']+'/'+grades['CS206']+'/'+grades['CS208']+'/').subscribe((val) => {

      this.ElectiveData=val;


    });
    this.divopen=(!this.divopen);
  }

}
