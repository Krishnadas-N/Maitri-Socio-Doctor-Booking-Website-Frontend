import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  imports: [ChartModule],
  standalone: true,
})
export class LineChartComponent implements OnInit {
  @Input() data: any;
  @Input() options: any;

  constructor() {}

  ngOnInit() {}
}
