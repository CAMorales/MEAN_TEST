import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostsService]
})
export class AppComponent {
  title = 'app';
}
