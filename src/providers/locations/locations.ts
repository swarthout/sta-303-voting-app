import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {
  apiKey = "AIzaSyBWJZ_N-NETFaGpjDgT3As8JOCZiSyO6EE"
  baseUrl = "/googlemaps/maps/api/place/autocomplete/json"
  labelAttribute = "description";
  constructor(public http: HttpClient) {
    console.log('Hello LocationsProvider Provider');
  }

  getResults(keyword: string) {
    return this.http.get(this.baseUrl, {
      params: {
        "input": keyword,
        "key": this.apiKey
      }
    })
  }

}