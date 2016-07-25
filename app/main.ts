import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import {
  GOOGLE_MAPS_PROVIDERS,
  provideLazyMapsAPILoaderConfig
} from 'angular2-google-maps/core';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	GOOGLE_MAPS_PROVIDERS,
  	provideLazyMapsAPILoaderConfig({ apiKey: 'AIzaSyDNw5kxIkzj-FXHh6tXyyfomrHViE2ySC4' })
  	]);