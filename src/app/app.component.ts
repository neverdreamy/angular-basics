import {Component, OnInit} from '@angular/core';

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
    {title: 'title1', text: 'text1', id: 1},
    {title: 'title2', text: 'text2', id: 2}
  ];

  updatePosts(myPost: Post) {
    this.posts.unshift(myPost);
  }

  removePost() {
    this.posts.pop();
  }
}
