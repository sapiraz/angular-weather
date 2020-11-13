import { Component, Input } from "@angular/core";
import { WeatherRepresentation } from '../../common/weather';
import { WeatherWidgetDisplayMetadata } from './weather-widget-display';

@Component({
  selector: 'app-weather-widget-display',
  templateUrl: './weather-widget-display.html',
  styleUrls: ['./weather-widget-display.scss']
})
export class WeatherWidgetDisplay {
  @Input() metadata: WeatherWidgetDisplayMetadata;
  @Input() weather: WeatherRepresentation;
}
