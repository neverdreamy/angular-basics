import {Component} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  num = 2.51234;
  str = 'hello world';
  date: Date = new Date();
  float = 0.42;

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  search = '';
  searchField = 'title';

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved')
    }, 6000);
  });

  myDate: Observable<Date> = new Observable( obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  posts: Post[] = [
    {title: 'Game', text: 'Game of the year'},
    {title: 'Film', text: 'Film of the year'},
    {title: 'Web', text: 'HTML + CSS + JS'}
  ];

  addPost() {
    this.posts.unshift({
      title: 'Post title',
      text: 'Post text'
    });
  }

  removePost() {
    this.posts.shift();
  }
}
