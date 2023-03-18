export class ToolboxChart {
  right: number;
  feature: FeatureChart;
  constructor() {
    this.right = 10;
    this.feature = new FeatureChart()
  }
}

export class DataZoom {
  show: boolean;
  yAxisIndex: string;
  xAxisIndex: string;
  constructor() {
    this.show = true;
    this.yAxisIndex = 'none';
  }
}

export class FeatureChart {
  dataZoom: DataZoom;
  restore: {};
  saveAsImage: {};
  constructor() {
    this.dataZoom = new DataZoom();
  }
}

export class saveAsImage {

  type: string;
  name: string ;
  backgroundColor: string;
  connectedBackgroundColor: string;
  excludeComponents: string[] ;
  show: boolean ;
  title: string;
  icon: any;
}