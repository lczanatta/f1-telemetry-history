import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  DataZoomComponent,
  ToolboxComponent,
  VisualMapComponent,
  LegendComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
// Import the Canvas renderer
// Note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, BarChart } from 'echarts/charts';
import * as moment from 'moment';
import { ECharts } from 'echarts';
import { AxisLabel, AxisLine, YAxisChart } from 'src/app/shared/echartModels/echart-yAxis';
import { ItemStyle, LineStyle, SeriesChart } from 'src/app/shared/echartModels/echart-series';
import { EchartOption, GridEchart } from 'src/app/shared/echartModels/echart-options';
import { XAxisChart } from 'src/app/shared/echartModels/echart-xaxis';
import { TimingWrapper } from '../objects/helpers';
import { Driver } from '../objects/MRData';
import { ToolTipChart } from '../shared/echartModels/echart-tooltip';




const ID_NAME = 'id';

@Component({
  selector: 'app-fit-chart',
  templateUrl: './fit-chart.component.html',
  styleUrls: ['./fit-chart.component.scss']
})
export class FitChartComponent implements OnInit {

  @Input() pilotTimings: Map<string, TimingWrapper[]>;
  @Input() pilots: Driver[];
  @Input () labels: any[];

  expanded = false;
  showChart = true;
  splited = false;
  splitSize: number;
  chartOption: EchartOption = new EchartOption();

  myChart: echarts.ECharts;
  constructor(    ) {
    this.chartOption.legend.formatter = this.legendFormatter;
    this.chartOption.tooltip.formatter = this.formaterTooltip;
  }
  legendFormatter(name: string): any {
    return name.split(':')[0];
  }

  formaterTooltip(series: any): any {
    const [firstSeries] = series;
    const title = firstSeries.axisValue;
    let tooltip = `<div>${title}</div>`;
    series.forEach((s: any) => {
      tooltip += `<div>${s.marker} ${s.seriesName.split(':')[0]}: ${s.value ? s.value : ''} ${s.seriesName.split(':')[1]}</div>`;
    });

    return tooltip;
  }
  async ngOnInit(): Promise<void> {
    console.log(this.pilots, this.pilotTimings)
    echarts.use([
      TitleComponent,
      TooltipComponent,
      GridComponent,
      ToolboxComponent,
      DatasetComponent,
      TransformComponent,
      VisualMapComponent,
      LineChart,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer,
      DataZoomComponent,
      LegendComponent,
      BarChart
    ]);
    this.initChart();
  }

  initChart(): void {
    const chart = document.getElementById('main');
    this.chartOption.yAxis = [] as never[];
    console.log(chart)
    if ( chart != null) {
      let tooltip = new ToolTipChart();
      tooltip.trigger = 'axis';
      tooltip.formatter = function(series) {
        let lap = series[0].axisValue;
        let tooltip = `<div>Lap: ${lap}</div>`;


        series.forEach((s: any) => {
          tooltip += `<div>${s.marker} ${s.seriesName}: 0${(s.value as Date).getMinutes()}:${(s.value as Date).getSeconds()}.${(s.value as Date).getMilliseconds()}</div>`;
        });
        return tooltip;
      }

      this.chartOption.legend.data = this.pilots.map(pilot => pilot.givenName +" "+pilot.familyName).sort();
      this.myChart = echarts.init(chart, 'dark');
      let x = new XAxisChart();
      x.type = 'category';
      x.data = Array(54).fill(1).map((element, index) => index + 1);
      this.chartOption.xAxis.push(x);
      this.chartOption.tooltip = tooltip;
      let that = this;
      let y = new YAxisChart();
      y.type = 'time'
      this.chartOption.yAxis.push(y);
      this.pilotTimings.forEach((value,key) => {
        let series = new SeriesChart();
        series.type = 'line';
        let pilot = this.pilots.filter(value => value.driverId == key)[0];
        series.name = pilot.givenName + ' ' + pilot.familyName;
        series.data = value.map(elem => elem.timing.toDate());
        this.chartOption.series.push(series);
      });


      console.log(this.chartOption);
      this.reloadChart();
    }
  }

  reloadChart(): void {
    console.log(this.chartOption);
    const clone = Object.assign({}, this.chartOption);
    this.myChart.showLoading();
    this.showChart = false;
    this.myChart.setOption(clone as {}, true);
    this.showChart = true;
    this.myChart.hideLoading();

  }


}
