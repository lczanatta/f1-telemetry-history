import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MrData, MrDataWrapper } from './objects/MRData';
@Injectable({
  providedIn: 'root'
})
export class ErgastServiceService {

  private rootUrl = 'http://ergast.com/api/f1/';
  private format = '.json'
  constructor(private http: HttpClient) { }

  getSeasons(): Promise<MrDataWrapper> {
    return this.http.get(this.getUrl('seasons', 100, 0))
      .toPromise()
      .then( response => {return response as MrDataWrapper})
      .catch(error => error)
  }

  getCircuits(season:string):Promise<MrDataWrapper> {
    return this.http.get(this.getUrl(`${season}`, 100, 0))
    .toPromise()
    .then(response => {
      return response as MrDataWrapper;
    }).catch(error => error);
  }

  getPilots(season:string, round:number): Promise<MrDataWrapper> {
    return this.http.get(this.getUrl(season + `/${round}/drivers`, 100, 0))
    .toPromise()
    .then(response => {
      return response as MrDataWrapper;
    }).catch(error => error);
  }

  getRaceResult(season:string, round:number): Promise<MrDataWrapper> {
    return this.http.get(this.getUrl(`${season}/${round}/results`))
    .toPromise()
    .then(response => {
      return response as MrDataWrapper;
    })
    .catch(error => error);
  }

  getLapTime(season: string, round: number, lap: number): Promise<MrDataWrapper> {
    return this.http.get(this.getUrl(`${season}/${round}/laps/${lap}`))
    .toPromise()
    .then(response => {
      return response as MrDataWrapper;
    })
    .catch(error => error);
  }

  private getUrl(action: string, limit = 100, offset = 0): string {
    return this.rootUrl + action + this.format + `?limit=${limit}&offset=${offset}`;
  }

}
