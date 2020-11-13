import { NgModule } from '@angular/core';
import { WeatherWidgetComponent } from './weather/components/weather-widget/weather-widget.component';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  imports: [
    WeatherModule
  ],
  exports: [
    WeatherWidgetComponent
  ]
})
export class SharedModule {}
