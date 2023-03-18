export class SeriesChart {

  type: string ;
  id: number ;
  name: string ;
  coordinateSystem: string;
  xAxisIndex: number;
  yAxisIndex: number;
  polarIndex: number;
  symbol: string;
  symbolSize: number ;
  data: any[] = [];
  lineStyle: LineStyle;
  itemStyle: ItemStyle;
  areaStyle: AreaStyle | undefined | {};
  // symbolRotate ... ;
  // symbolKeepAspect: false ;
  // symbolOffset: [0; 0] ;
  // showSymbol: true ;
  // showAllSymbol: string;
  // hoverAnimation: true ;
  // legendHoverLink: true ;
  // stack ... ;
  // cursor: string;
  // connectNulls: false ;
  // clip: true ;
  // step: false ;
}

export class LineStyle {
  color: string;
  width: number;
  type: string;
}

export class ItemStyle {
  color: string ;
  borderColor: string ;
  borderWidth: number ;
  borderType: string;
}

export class AreaStyle {
  origin: string;
  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
  opacity: number;
}
