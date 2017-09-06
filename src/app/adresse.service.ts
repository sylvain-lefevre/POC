import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Route } from './route';
import { Etape } from './etape';

@Injectable()
export class AdresseService {
  private myUrl = 'http://WIN-GIOBSRFMT6S:5000/route/v1/driving/';  // URL to web api
  constructor(private http: Http) { }

  getDistance(departX: string, departY: string, arriveeX: string, arriveeY: string, cooEtapes: Array<Etape>): Promise<Route[]> {
    let etapes = '';
    if (etapes != null) {
      for (const etape of cooEtapes){
        etapes = etapes + etape.x + ',' + etape.y + ';';
      }
    }
    return this.http.get(this.myUrl + departX + ',' + departY + ';' + etapes + arriveeX + ',' + arriveeY)
             .toPromise()
             .then(response => response.json().routes as Route[])
             .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
