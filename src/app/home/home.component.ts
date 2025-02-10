import { Component } from '@angular/core';
import { UserInfoComponent } from "../components/user-info/user-info.component";
import { HeaderComponent } from '../components/header/header.component';
import { MapComponent } from '../components/map/map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserInfoComponent, HeaderComponent, MapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
