import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-weather-icon',
  template: `
    <img src="http://openweathermap.org/img/w/{{iconCode}}.png"/>
  `
})
export class WeatherIconComponent {
  @Input() iconCode: string;
}
