import { Component, OnInit } from '@angular/core';
import { OfficeDetailComponent } from './components/office-list-item/office-detail.component';
import { MapComponent} from './components/map-component/map.component';
import { Office } from './components/office-list-item/office';
import { OfficeService } from './components/office-list-item/office.service';
import {
  GOOGLE_MAPS_DIRECTIVES,
  GOOGLE_MAPS_PROVIDERS
} from 'angular2-google-maps/core';

@Component({
  selector: 'application',
  templateUrl: 'app/app.template.html',
  directives: [OfficeDetailComponent, MapComponent],
  providers: [OfficeService]
})

export class AppComponent implements OnInit {
  title = 'OMFG';
  offices: Office[];
  selectedOffice: Office;

  constructor(private officeService: OfficeService) { }
  ngOnInit() {
    this.getOffices();
  }
  onSelect(office: Office): void {
    this.selectedOffice = office;
  }
  getOffices() {
    this.officeService.getOffices().then(offices => this.offices = offices);
  }
}

