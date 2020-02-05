import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle2]'
})
export class Style2Directive {

  @Input('appStyle2') color = 'blue';
  @Input() dStyle: {border?: string, borderRadius?: string};

  constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
       this.r.setStyle(event, 'color', 'yellow');
  }

  @HostListener('mouseenter', ['$event.target']) onEnter(event: Event) {
    this.r.setStyle(event, 'color', this.color);
    this.r.setStyle(event, 'border', this.dStyle.border);
    this.r.setStyle(event, 'border-radius', this.dStyle.borderRadius);
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(event: Event) {
    this.r.setStyle(event, 'color', 'green');
    this.r.setStyle(event, 'border', null);
    this.r.setStyle(event, 'border-radius', null);
  }

}
