import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MapService {
  //get access to htttp methods (get, post, etc).
http = inject(HttpClient);

//api to get lat and long from city and state entered

getGeoLocation(city:string, state:string) { 
  const url = `https://nominatim.openstreetmap.org/search?q=${city},+${state}&format=json`;
  return this.http.get<any>(url);
}

//api for fetching weather info based on lat and long

// https://api.weather.gov/points/{latitude},{longitude}

getWeatherApi(lat:number, long:number): Observable<any> {
  const url = `https://api.weather.gov/points/${lat},${long}`;
  return this.http.get<any>(url);
}

//api to use forecast api from lat and long api previously mentioned.
getForecastApi(any:any){
  const url = `${any}`;
  return this.http.get<any>(url);
}




}
