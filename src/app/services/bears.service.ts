import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class BearsService {

  constructor(private http: Http) { }

  getAllBears() {
    return this.http.get(environment.apiUrl + '/api/bears')
      .map(res => res.json());
  }

}
