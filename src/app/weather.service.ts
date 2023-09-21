import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Belo+Horizonte&appid=cf579adcb264c37964ef2339d8abc955&units=metric');
  }
}
