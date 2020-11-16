import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() outputAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() outputRemove: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput') inputRef: ElementRef;

  title = '';
  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const myPost: Post = {
        title: this.title,
        text: this.text
      };

      console.log('addPost');
      this.outputAdd.emit(myPost);
      this.title = this.text = '';
    }
  }

  removePostBtn() {
    console.log('removePost');
    this.outputRemove.emit();
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}
