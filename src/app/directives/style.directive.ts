import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string;
  @HostBinding('style.color') elColor = null;
  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('mouseover', ['$event.target']) onOver(event: Event) {
    this.elColor = this.color;
    // this.r.setStyle(this.el.nativeElement, 'color', this.color);
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(event: Event) {
    this.elColor = null;
     // this.r.setStyle(this.el.nativeElement, 'color', null);
  }
}
