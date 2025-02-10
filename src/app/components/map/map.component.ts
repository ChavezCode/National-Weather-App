import { AfterViewInit, Component, inject, Inject, OnInit, signal, ViewChild } from '@angular/core';
import { MapService } from '../../map.service';
import { catchError } from 'rxjs';
import { UserInfoComponent } from '../user-info/user-info.component';
import { UserInfoService } from '../../user-info.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{

  city: string = '';
  state: string = '';
  temp: string = '';
  description: string = '';
  //work onj signal html written 
 
  lat: any = '';
  lon: any = '';
  constructor(private mapService: MapService, private userInfoService:UserInfoService) {}


  ngOnInit(): void {

    this.userInfoService.city$.subscribe((city) => {
      if(this.city != city) {
        this.city = city;
        console.log(city);
        this.mapService
            .getGeoLocation(this.city, this.state)
            .pipe(
              catchError((err) => {
                console.log(err);
                throw err;
              })
            )
              .subscribe((coordinates:any) => {
                console.log(coordinates);
                // check to see if the coordinates do not bring up any data
                if (coordinates.length == 0 || coordinates == undefined) {
                  this.city = 'Check Spelling';
                }else {
                this.lat = coordinates[0].lat;
                this.lon = coordinates[0].lon;
                
              this.mapService
                .getWeatherApi(parseFloat(coordinates[0].lat), parseFloat(coordinates[0].lon))
                    .pipe(
                      catchError((err) => {
                        console.log(err);
                        //catch misspelling of city (if user enters rrrr it identifies it as a railroad location!!)
                        this.state = 'Check Spelling';
                        this.city = 'Check Spelling';
                        throw err;
                      })
                    ).subscribe((data:any) => {
                      console.log(data);
                      this.mapService
                        .getForecastApi(data.properties.forecast)
                          .subscribe((forecast:any) => {
                            console.log(forecast);
                            //what name did it find?
                            let apiCity = coordinates[0].name; 
                            //what is the address type? City, Road, State.
                            let locationType = coordinates[0].addresstype;
                            //check to see if a city or town was found with the coordinates give of the city and state
                            if (locationType == "city" || locationType == "town") {
                              //give me the temperature if it is an actual city
                               this.temp = forecast.properties.periods[0].temperature;
                               this.description = forecast.properties.periods[0].shortForecast;
                               console.log(apiCity);
                            } else {
                              //return this for city, state, temp and weather description if not a city
                              this.city = 'Please enter a valid city';
                              this.state = 'City is not within the state';
                              this.temp = '';
                              this.description = '';
                              console.log(apiCity);
                            }
                            
                            console.log(forecast);
                            




                          })
                      })
                }
              })      
      }
                        
    })
    
    

    this.userInfoService.state$.subscribe((state) => {
      if(this.state != state) {
        this.state = state;
        console.log(state);
        this.mapService
            .getGeoLocation(this.city, this.state)
              .subscribe((coordinates:any) => {
                console.log(coordinates);
                // check to see if the coordinates do not bring up any data
                if (coordinates.length == 0 || coordinates == undefined) {
                  this.state = 'Check Spelling';
                  this.temp ='';
                }else{
                this.lat = coordinates[0].lat;
                this.lon = coordinates[0].lon;
                this.mapService
                .getWeatherApi(parseFloat(coordinates[0].lat), parseFloat(coordinates[0].lon))
                    .pipe(
                      catchError((err) => {
                        console.log(err);
                        this.city = 'Check Spelling';
                        this.state = 'Check Spelling';
                        console.log(coordinates[0].lat);
                        throw err;
                      })
                    ).subscribe((data:any) => {
                      // this.weatherArray.set(data);
                      console.log(data);
                      this.mapService
                        .getForecastApi(data.properties.forecast)
                          .subscribe((forecast:any) => {
                            //what name did it find?
                            let apiCity = coordinates[0].name; 
                            //what is the address type? City, Road, State.
                            let locationType = coordinates[0].addresstype;
                            //check to see if a city or town was found with the coordinates give of the city and state
                            if (locationType == "city" || locationType == "town") {
                              //give me the temperature if it is an actual city
                               this.temp = forecast.properties.periods[0].temperature;
                               this.description = forecast.properties.periods[0].shortForecast;
                            } else {
                              //return this for city, state, temp and weather description if not a city
                              this.city = 'Please enter a valid city';
                              this.state = 'City is not within the state';
                              this.temp = '';
                              this.description = '';
                              console.log(apiCity);
                            }

                            
                            // console.log(forecast.properties.periods[0].temperature))
                          })
                      })
                  }
              })
      } 
    })
  }
};
