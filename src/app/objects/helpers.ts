import * as moment from "moment";
import { Moment } from "moment";

export class  TimingWrapper{
  timing: Moment;
  position: number;

  constructor(timeStr: string, position: number) {
    this.timing = moment(timeStr, 'mm:ss:SSS')
    this.position = position;
  }
}