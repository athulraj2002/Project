import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import {AuthService} from '../../home/auth.service';
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule} from '@angular/forms';

export interface expertise{
  value:string;
}


@Component({
  selector: 'app-predicted',
  templateUrl: './predicted.component.html',
  styleUrls: ['./predicted.component.scss']
})
export class PredictedComponent implements OnInit {
  ElectiveData:any;
  userData:any;
  intrestValue:string;expertiseValue:string;
  divopen:boolean=false;
  Expertise:expertise[]=[
    {value:'Front-end Developer'},
    {value:'Back-end Developer'},
    {value:'Full-Stack Developer'},
    {value:'Integration & Testing'},
    {value:'Documentation'}
  ];
  projectGroupPredict:FormGroup;
  edit:boolean=false;
  edit2:boolean=false;
  constructor(private http: HttpClient,private authservice:AuthService,private _formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.userData=this.authservice.getUserData();
    if (this.userData['intrests'])
        this.intrestValue=this.userData['intrests'];
    else this.edit=true;
    if(this.userData['expertise'])
        this.expertiseValue=this.userData['expertise'];
    else  this.edit2=true;


    this.projectGroupPredict=this._formBuilder.group({
      intrests:[''],
      EXpertise:['']
    });


  }
  getElective() {
        let grades=this.authservice.getGrades();
        console.log(grades);
    this.http.get('http://127.0.0.1:5002/elPred/'+grades['HS200']+'/'+grades['MA202']+'/'+grades['CS202']+'/'+grades['CS204']+'/'+grades['CS206']+'/'+grades['CS208']+'/').subscribe((val) => {

      this.ElectiveData=val;


    });
    this.divopen=(!this.divopen);
  }

  updateIntrExper(){
    let formData=this.projectGroupPredict.value;
    if(this.edit2&&this.edit){
            this.authservice.updateIntrExperFirbase2(formData.intrests,formData.EXpertise);
    }
    else if(this.edit){
            this.authservice.updateIntrExperFirbase('intrests',formData.intrests);
    }
    else if(this.edit2){
            this.authservice.updateIntrExperFirbase2('expertise',formData.EXpertise);
    }
  }

}
