import { ThrowStmt } from '@angular/compiler';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component } from '@angular/core';
import { ErgastServiceService } from './ergast-service.service';
import { TimingWrapper } from './objects/helpers';
import { Driver, Lap, MrData, MrDataWrapper, Race, Result, Season } from './objects/MRData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'f1-telemetry-history';
  public data: MrData;
  public seasons: Season[]
  public showForm = false;
  public races: Race[];
  private season: string;
  private race: Race;
  public pilots: Driver[];
  private results: Result[];
  private laps: number;
  public pilotsTiming = new Map<String, TimingWrapper[]>();
  public showChart = false;
  constructor(private ergastService:ErgastServiceService){

    this.ergastService.getSeasons()
    .then( response => {
      this.data = response.MRData;
      this.seasons = this.data.SeasonTable.Seasons;
      this.showForm = true;
    })
  }

  async pickDate(season:string) {
    this.season = season;
    this.ergastService.getCircuits(season)
    .then(season => {
      this.races = season.MRData.RaceTable.Races;
    });
  }

  async getPilots(round: number) {
    this.showChart = false;
    let response = await this.ergastService.getPilots(this.season,round);
    this.pilots = response.MRData.DriverTable.Drivers;
    this.pilots.forEach(pilot => {
      this.pilotsTiming.set(pilot.driverId, []);
    });
    console.log(this.pilotsTiming);
    response = await this.ergastService.getRaceResult(this.season,round);
    this.results = response.MRData.RaceTable.Races[0].Results;
    this.laps = this.results[0].laps;
    for( let lap = 1; lap <= this.laps; lap++) {
      response = await this.ergastService.getLapTime(this.season,round, lap)
      this.getPilotTiming(response.MRData.RaceTable.Races[0].Laps[0]);
    }
    this.showChart = true;

  }

  getPilotTiming(lap: Lap) {
    lap.Timings.forEach(timing => {
      let pilotTiming = new TimingWrapper(timing.time, timing.position);
      this.pilotsTiming.get(timing.driverId).push(pilotTiming);
    });

  }

}
