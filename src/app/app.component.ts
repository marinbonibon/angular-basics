import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CounterService} from './services/counter.service';
import {PostsService} from './services/posts.service';

export interface Post {
  title: string;
  body: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [];

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

  constructor(private counterService: CounterService,
              private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  updatePosts(post) {
    this.posts.unshift(post);
  }

  fetchPosts() {
    this.postsService.fetchPosts()
      .subscribe(posts => this.posts = posts);
  }

  removePost(id: number) {
    this.postsService.removePost(id)
      .subscribe(() => this.posts = this.posts.filter(el => el.id !== id));

  }
}
