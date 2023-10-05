import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_KEY: string = environment.API_KEY;

  constructor(private http: HttpClient) { }

  getWeather(city: string, units: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid='+this.API_KEY+'&units='+ units);
  }
}
