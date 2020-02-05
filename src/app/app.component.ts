import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {CounterService} from './services/counter.service';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'fffff', text: 'dfdffg', id: 1},
    {title: 'fgfgfg', text: 'gfgfdd', id: 2},
    {title: 'Post3', text: 'Lorem ipsum', id: 3}
  ];

  isVisible = true;

  date$: Observable<Date> = new Observable( obs => {
      setInterval(() => {obs.next(new Date()); }, 1000);
  });
  search = '';
  searchField = 'title';
  p: Promise<string> = new Promise<string>(resolve =>
    setTimeout(() => {
      resolve('Promise resolved');
      }, 2000));

  constructor(private counterService: CounterService) {
  }

  updatePosts(post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(el => el.id !== id);
  }
}
