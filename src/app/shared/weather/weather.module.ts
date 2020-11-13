import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherService } from './services/weather.service';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherWidgetDisplay } from './components/weather-widget-display/weather-widget-display.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherService
  ],
  declarations: [
    WeatherWidgetComponent,
    WeatherWidgetDisplay,
    WeatherIconComponent
  ],
  exports: [
    WeatherWidgetComponent,
    WeatherWidgetDisplay
  ]
})
export class WeatherModule {}
