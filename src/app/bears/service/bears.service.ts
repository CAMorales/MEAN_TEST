import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class BearsService {

  private bearsApi = 'api/bears';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAllBears() {
    const url = `${environment.apiUrl + this.bearsApi}`;
    return this.http.get(url).toPromise().then(
      response => response.json()
    ).catch(this.handleError);
    // .map(res => res.json());
  }

  getBear(id: string) {
    const url = `${environment.apiUrl + this.bearsApi}/${id}`;
    return this.http.get(url).toPromise().then(response => response.json())
      .catch(this.handleError);
  }

  update(bear: any) {
    const url = `${environment.apiUrl + this.bearsApi}/${bear._id}`;
    return this.http.put(url, JSON.stringify(bear), { headers: this.headers })
      .toPromise().then(() => bear).catch(this.handleError);
  }

  delete(id: string) {
    const url = `${environment.apiUrl + this.bearsApi}/${id}`;
    return this.http.delete(url, { headers: this.headers }).toPromise()
      .then(() => null).catch(this.handleError);
  }

  create(bearName: string) {
    const url = `${environment.apiUrl + this.bearsApi}`;
    return this.http.post(url, JSON.stringify({ name: bearName }), { headers: this.headers })
      .toPromise().then(res => res.json()).catch(this.handleError);
  }

}
