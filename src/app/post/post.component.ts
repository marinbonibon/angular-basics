import {Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';
import {LocalCounterService} from '../services/local-counter.service';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [LocalCounterService]
})
export class PostComponent implements OnInit, OnDestroy {
 @Input() post: Post;
  @Output() removeId = new EventEmitter<number>();
 @ContentChild('info', {static: true}) infoRef: ElementRef;

  constructor(private localCounter: LocalCounterService,
              private appCounter: CounterService) { }

  ngOnInit() {
    console.log('this.infoRef', this.infoRef);
  }
  ngOnDestroy(): void {
    console.log('onDestroy');
  }

  removePost() {
     this.removeId.emit(this.post.id);
  }

}
