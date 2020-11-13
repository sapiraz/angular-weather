import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CityRepresentation, WeatherRepresentation } from '../common/weather';
import Cities from '../../../../assets/city.list.json';
import { environment } from 'src/environments/environment';
import { OPEN_WEATHER_MAP_API_ENDPOINT } from '../common/consts';
import { OpenWeatherMapResponse } from '../common/openWeatherMap';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {}

  getCities(): Observable<CityRepresentation[]> {
    return new Observable(o => {
      o.next(Cities as CityRepresentation[]);
      o.complete();
    })
  }

  getWeather(query: string): Observable<WeatherRepresentation> {
    return this.http.get(OPEN_WEATHER_MAP_API_ENDPOINT, {
      params: {
        q: query,
        appId: environment.openWeatherMap.apiKey,
        units: environment.openWeatherMap.units
      }
    }).pipe(map(res => {
      return this.mapWeatherResponseToWeatherRepresentation(<OpenWeatherMapResponse>res);
    }));
  }

  /**
   * Map third party API response to inside weather structure for easier migration to different APIs
   */
  private mapWeatherResponseToWeatherRepresentation (res: OpenWeatherMapResponse): WeatherRepresentation {
    return {
      temp: res.main.temp,
      humidity: res.main.humidity,
      pressure: res.main.pressure,
      category: {
        name: res.weather[0].main,
        icon: res.weather[0].icon
      },
      cityName: res.name,
      countryCode: res.sys.country
    }
  }
}
