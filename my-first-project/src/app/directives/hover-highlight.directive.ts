import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input() appHoverHighlight: string = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHoverHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
