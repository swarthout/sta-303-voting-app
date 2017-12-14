import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
declare var google;
/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {
  apiKey = "AIzaSyBWJZ_N-NETFaGpjDgT3As8JOCZiSyO6EE"
  autoCompleteUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json"
  labelAttribute = "description";
  autoCompleteService: any;
  constructor(public http: HttpClient) {
    console.log('Hello LocationsProvider Provider');
    this.autoCompleteService = new google.maps.places.AutocompleteService();
  }

  getResults(keyword: string) {
    return new Promise((resolve, reject) => {
      this.autoCompleteService.getQueryPredictions({
        input: keyword
      }, (predictions, status) => {
        if (status != google.maps.places.PlacesServiceStatus.OK) {
          reject(status)
        }
        resolve(predictions)
      })
    })
  }

}