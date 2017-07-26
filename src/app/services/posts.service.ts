import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }
  // Get all posts from the API
  getAllPosts() {
    return this.http.get(environment.apiUrl + 'api/posts')
      .map(res => res.json());
  }

}
