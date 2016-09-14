import { Component, Input } from '@angular/core';
import { Office } from './office';


@Component({
  selector: 'my-office-detail',
  templateUrl: 'app/components/office-list-item/office-detail.template.html'
})
export class OfficeDetailComponent {
	@Input()
	office: Office;
}