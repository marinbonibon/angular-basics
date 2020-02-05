import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = '';
  text = '';

  constructor() { }

  @Output() add: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('inputTitle', {static: false}) inputRef: ElementRef;
  ngOnInit() {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      };
      this.add.emit(post);
      console.log('New Post', post);
      this.title = this.text = '';
    }
  }

  addFocus() {
    this.inputRef.nativeElement.focus();
  }
}
