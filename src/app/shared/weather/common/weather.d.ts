import { OpenWeatherMapWeatherCategory } from "./openWeatherMap";

export interface WeatherRepresentation {
  cityName: string;
  countryCode: string;
  temp: number;
  humidity: number;
  pressure: number;
  category: WeatherCategory;
}

export interface WeatherCategory {
  name: string;
  icon: string;
}

export interface CityRepresentation {
  id: number;
  name: string;
  country: string;
  coord: GeoCoordinates;
}

export interface GeoCoordinates {
  lon: number;
  lat: number;
}
