import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-weather-icon',
  template: `
    <img src="http://openweathermap.org/img/wn/{{iconCode}}@2x.png"/>
  `
})
export class WeatherIconComponent {
  @Input() iconCode: string;
}
