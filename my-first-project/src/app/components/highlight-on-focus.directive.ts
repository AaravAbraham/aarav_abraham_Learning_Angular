import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input() appHighlightOnFocus: string = 'skyblue';

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.outline = `2px solid ${this.appHighlightOnFocus}`;
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.outline = '';
  }
}
