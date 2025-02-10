import { Component } from '@angular/core';
import { UserInfoService } from '../../user-info.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  city: string = '';
  state: string = '';
  validStateMessage: string='';
  validCityMessage: string='';
  constructor(private userInfoService: UserInfoService){}

  public getCity() {
      return this.city;  
  }
  public getState() {
        return this.state;
  }

  public setCity(city: string) {
    this.city = city;
  }
  public setState(state: string) {
    this.state = state;
  }
  

  validCity() {
    let validCityMessage:string;
    let x = <HTMLInputElement>document.getElementById('city');
    if (isNaN(Number(x.value))) {
      validCityMessage = '';
      this.setCity(x.value);
      this.userInfoService.setCity(this.city);
    }else {
      validCityMessage ='Invalid input';
    }
    let messageHolder = <HTMLInputElement>document.getElementById('validCity');
    messageHolder.innerHTML = validCityMessage;
  }

  
  validState() {
    let validStateMessage:string;
    let x = <HTMLInputElement>document.getElementById('state');
    if (isNaN(Number(x.value))) {
      validStateMessage = '';
      this.setState(x.value);
      this.userInfoService.setState(this.state);
    }else {
      validStateMessage ='Invalid input';
    }
    let messageHolder = <HTMLInputElement>document.getElementById('validState');
    messageHolder.innerHTML = validStateMessage;
  }

  // If both inputs are valid, update view

  // searchForecast() {
  //   if (this.validCityMessage == 'Valid input' && this.validStateMessage == "Valid input") {
        
  //     }
  // }

  
}
