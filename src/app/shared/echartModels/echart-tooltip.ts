export class AxisPointer {
  type: string;
  axis: string;
  constructor() {
    this.type = 'cross';
    this.axis = 'auto';
  }
}
export class ToolTipChart {
  show: boolean;
  trigger: string;
  axisPointer: AxisPointer;
  formatter: any;
  constructor() {
    this.show = true;
    this.trigger = 'axis';
    this.axisPointer = new AxisPointer();
  }
}