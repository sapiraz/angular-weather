export interface OpenWeatherMapResponse {
  coord: {
      lon: number;
      lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string
}[],
  base: string;
  main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
  };
  visibility: number;
  wind: {
      speed: number;
      deg: number
  };
  clouds: {
      all: number
  };
  dt: number;
  sys: {
      country: string;
      sunrise: number;
      sunset: number
  };
  timezone: number;
  id: 707860;
  name: string;
  cod: number
}

export interface OpenWeatherMapWeatherCategory {
  id: number;
  main: string;
  description: string;
  icon: string;
}
