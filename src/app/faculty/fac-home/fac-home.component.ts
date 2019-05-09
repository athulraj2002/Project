import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label,MultiDataSet } from 'ng2-charts';
import {AuthService} from '../../home/auth.service';

@Component({
  selector: 'app-fac-home',
  templateUrl: './fac-home.component.html',
  styleUrls: ['./fac-home.component.scss']
})
export class FacHomeComponent implements OnInit {

  message;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{ticks:{
        fontColor:'white'
    }}], yAxes: [{     ticks: {
          max : 70,
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

  public doughnutChartLabels: Label[] = ['pass','fail'];
 public doughnutChartData: MultiDataSet = [
   [350, 450, 100]
 ];
 public doughnutChartType: ChartType = 'doughnut';

  public barChartLabels: Label[] = ['0-10', '10-20', '20-30', '30-40', '40-50','50-60'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55], label: 'Marks' }
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

  constructor(private authservice:AuthService) {


  }

  ngOnInit() {
    this.authservice.fileData.subscribe(message => this.message = message);
    console.log(this.message);
    //this.barChartData=[{data:this.message['total_mark_distrib'],label:'distribution'}];

  }

}
