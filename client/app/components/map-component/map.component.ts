import { Component, Input } from '@angular/core';
import { Office } from '../office-list-item/office';
import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  GOOGLE_MAPS_PROVIDERS,
  GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';


@Component({
  selector: 'map',
  templateUrl: 'app/components/map-component/map.template.html',
  directives: [GOOGLE_MAPS_DIRECTIVES],
  providers: [GOOGLE_MAPS_PROVIDERS],
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
})
export class MapComponent {
  @Input()
  offices: Office[];

    // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 52.378690558442;
  lng: number = 4.9005500972271;
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
}