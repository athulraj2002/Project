import { Component, OnInit } from '@angular/core';
 import {MatCardModule} from '@angular/material/card';
 import {MatTabsModule} from '@angular/material/tabs';
 import {MatTableModule} from '@angular/material/table';
 import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
 import * as pluginDataLabels from 'chartjs-plugin-datalabels';
 import { Label } from 'ng2-charts';
@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{     ticks: {
          max : 100,
          min : 0,
        }}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }

  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Marks' }
  ];
  colors = [

  { // 2nd Year.
    backgroundColor: 'rgba(30, 169, 224, 0.8)'
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
