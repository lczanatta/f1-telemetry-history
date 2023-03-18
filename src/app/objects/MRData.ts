export class MrData {
  limit: number;
  offset: number;
  series: string;
  total: number;
  SeasonTable: SeasonTableClass;
  RaceTable: RaceTableWrapper;
  DriverTable: DriverTableWrapper;
}

export class SeasonTableClass {
  Seasons: Season[] = [];
}

export class Season {
  season: string;
  url: string;
}
export class MrDataWrapper {
  MRData: MrData;
}

export class Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export class Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export class FirstPractice {
  date: string;
  time: string;
}

export class SecondPractice {
  date: string;
  time: string;
}

export class ThirdPractice {
  date: string;
  time: string;
}

export class Qualifying {
  date: string;
  time: string;
}

export class Sprint {
  date: string;
  time: string;
}

export class Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: FirstPractice;
  SecondPractice: SecondPractice;
  ThirdPractice: ThirdPractice;
  Qualifying: Qualifying;
  Sprint: Sprint;
  Results: Result[];
  Laps: Lap[];
}

export class RaceTableWrapper {
  season: string;
  Races: Race[];
}

export class Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export class DriverTableWrapper {
  season: string;
  round: string;
  Drivers: Driver[];
}

export class Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export class Lap {
  Timings: PilotTiming[];
}

export class PilotTiming {
  driverId: string;
  position: number;
  time: string;
}

export class Time {
  millis: string;
  time: string;
}

export class Time2 {
  time: string;
}

export class AverageSpeed {
  units: string;
  speed: string;
}

export class FastestLap {
  rank: string;
  lap: string;
  Time: Time2;
  AverageSpeed: AverageSpeed;
}

export class Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: number;
  status: string;
  Time: Time;
  FastestLap: FastestLap;
}
