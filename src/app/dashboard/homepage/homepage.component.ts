import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
//import {DataFetchService} from '../../dashboard/data-fetch.service';
import {AuthService} from '../../home/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
anaRe;analy;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{ticks:{
        fontColor:'white'
    }}], yAxes: [{     ticks: {
          max : 100,
          min : 0,
          fontColor: 'white'

        }}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'

      }
    },
    legend: {
  display: true,
  labels: {
    fontColor: 'white' // legend color (can be hexadecimal too)
  },
}

};
  public barChartLabels: Label[] = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55], label: 'Marks' }
  ];

    public lineChartOptions: ChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{ticks:{
          fontColor:'white'
      }}], yAxes: [{     ticks: {
            max : 10,
            min : 0,
            fontColor: 'white'

          }}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end'

        }
      },
      legend: {
    display: true,
    labels: {
      fontColor: 'white' // legend color (can be hexadecimal too)
    },
  }

};

    public lineChartLabels: Label[] = ['s1', 's2', 's3', 's4', 's5', 's6', 's7','s8'];
    public lineChartType: ChartType = 'line';
    public lineChartLegend = true;
    public lineChartPlugins = [pluginDataLabels];

    public lineChartData: ChartDataSets[] = [
      { data: [6.5, 5.9, 8.0, 8.1, 5.6, 5.5, 4.0,7.8], label: 'GPA' }
    ];
    colors = [

    { // 2nd Year.
     backgroundColor: 'rgba(30, 169, 224, 0.8)',
     borderColor: 'rgba(225,10,24,0.2)',
       pointBackgroundColor: 'rgba(225,10,24,0.2)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(225,10,24,0.2)',

    }
  ]


  public barChartLabels2: Label[] = ['s1', 's2', 's3', 's4', 's5', 's6', 's7','s8'];
  public barChartData2: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40,78], label: 'percentage' }
  ];

  userData:JSON;
  constructor(private authservice:AuthService,private httpClient:HttpClient) {
    this.userData=this.authservice.getUserData();
    this.httpClient.get('http://127.0.0.1:5002/analysis/'+this.userData['regno']).subscribe(data => {
      this.anaRe = data as JSON;
      this.analy=this.anaRe['analy'];
      this.authservice.updateAnaly(this.analy);
});

  }

  ngOnInit() {
    this.lineChartLabels=Object.keys(this.userData['GPA']);
    var dataArray=Object.values(this.userData['GPA']);
    dataArray=dataArray.map(Number);
    this.lineChartData=[
      {data:dataArray,label:'GPA'}
    ];
  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    dataFetch(){
      this.userData=this.authservice.getUserData();
      console.log(this.userData);
    }

}
