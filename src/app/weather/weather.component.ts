import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  maxTemp: number = 0;
  minTemp: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = 'Belo Horizonte';
  units: string = 'metric';
  cityName: string = 'Belo Horizonte';
  windDegre: number = 0;
  speedWind: number = 0;

  hours = Date.now();
  today = Date.now();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ''; 
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.city = this.cityName;
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeather(cityName, this.units)
    .subscribe({
      next: (res) => {
        // console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;
        this.maxTemp = this.myWeather.main.temp_max;
        this.minTemp = this.myWeather.main.temp_min;
        this.speedWind = this.myWeather.wind.speed;
        this.windDegre = this.myWeather.wind.deg;
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png'
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }

}
