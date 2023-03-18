import { LegendChart } from './echart-legend';
import { SeriesChart } from './echart-series';
import { ToolboxChart } from './echart-toolbox';
import { ToolTipChart } from './echart-tooltip';
import { XAxisChart } from './echart-xaxis';
import { YAxisChart } from './echart-yAxis';

export class EchartTitle {
  text: string;
  constructor() {
    this.text = '';
  }
}

export class GridEchart {
  top: string;
  bottom: string;
}

export class EchartOption {
  title: EchartTitle;
  toolbox: ToolboxChart;
  tooltip: ToolTipChart;
  xAxis: XAxisChart[];
  legend: LegendChart;
  yAxis: YAxisChart[];
  series: SeriesChart[];
  dataZoom: any[];
  grid: GridEchart[];
  constructor() {
    this.title = new EchartTitle();
    this.toolbox = new ToolboxChart();
    this.tooltip = new ToolTipChart();
    this.xAxis = [];
    this.legend = new LegendChart();
    this.yAxis = [];
    this.series = [];
    this.grid = [];
    const gridAux = new GridEchart();
    gridAux.bottom = '10% ';
    this.grid.push(gridAux);
    this.dataZoom =  [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
        {
          start: 0,
          end: 100
        }
      ];
  }
}

