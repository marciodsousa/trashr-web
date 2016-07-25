import { Injectable } from '@angular/core';
import { Office } from './office';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfficeService {
	//private officeUtl = 'https://www.deskbookers.com/nl-nl/sajax.json?q=Amsterdam&type=-&people=any&favorite=0&pid=&sw=52.293753%2C4.634942&ne=52.455562%2C5.162286&ids=17201%2C19640%2C13692%2C13691%2C12136%2C17938%2C15292%2C14886%2C14885%2C14884%2C14883%2C15730%2C15353%2C15351%2C15330%2C15080%2C17290%2C15454%2C15451%2C15379';
	private officeUrl = './app/components/office-list-item/mockdata.json';
	constructor(private http: Http) { }
	getOffices() {
		return this.http.get(this.officeUrl)
               .toPromise()
               .then(response => response.json().rows)
               .catch(this.handleError);
	}
	private handleError(error: any) {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}
}