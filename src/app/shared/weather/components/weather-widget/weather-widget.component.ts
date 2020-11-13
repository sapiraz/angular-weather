import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { CityRepresentation, WeatherRepresentation } from '../../common/weather';
import { WeatherWidgetDisplayMetadata } from '../weather-widget-display/weather-widget-display';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.html',
  styleUrls: ['./weather-widget.scss']
})
export class WeatherWidgetComponent implements OnInit {
  public locationForm: FormGroup;
  public cities: CityRepresentation[];
  public currentWeatherInfo: WeatherRepresentation;
  public displayWidgetMetadata: WeatherWidgetDisplayMetadata;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService) {}

  ngOnInit() {
    this.loadCities();
    this.initializeLocationForm();
    this.initializeWeatherDisplayMetadata();
  }

  public onLocationFormSubmit(): void {
    const value = this.locationForm.value.cityControl;
    this.weatherService.getWeather(value).subscribe(res => {
      this.currentWeatherInfo = res;
    });
  }

  private loadCities(): void {
    this.weatherService.getCities().subscribe(cities => {
      this.cities = cities;
    });
  }

  private initializeLocationForm(): void {
    this.locationForm = this.formBuilder.group({
      cityControl: new FormControl(null)
    });
  }

  private initializeWeatherDisplayMetadata(): void {
    this.displayWidgetMetadata = {
      units: environment.openWeatherMap.units
    }
  }
}
