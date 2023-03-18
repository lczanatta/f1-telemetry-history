export class YAxisChart {
  id: number;
  show: boolean ;
  gridIndex: number | undefined ;
  position: string ;
  offset: number ;
  type: string;
  name: string;
  nameLocation: string;
  // nameTextStyle: {...} ;
  nameGap: number ;
  // nameRotate ... ;
  // inverse: false ;
  // boundaryGap ... ;
  min: number ;
  max: number ;
  scale: boolean ;
  splitNumber: number ;
  minInterval: number ;
  maxInterval: number ;
  interval: number ;
  axisLabel: AxisLabel;
  axisLine: AxisLine;
  constructor() {
    this.axisLabel = new AxisLabel();
    this.nameLocation = 'middle';
    this.nameGap = -15;
    // this.offset = 20;
  }
}

export class AxisLabel {
  formatter: string;
  rotate: number;
  fontSize: number;
  color: string;
  constructor() {
    this.rotate = 60;
    this.fontSize = 12;
  }
}

export class AxisLine {
  show: boolean;
  lineStyle: LineStyle;
}

export class LineStyle {
  color: string;
  constructor() {
  }
}
