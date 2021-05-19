import { Directive, Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() searchedWord: string; // searchText
  @Input() content: string; // HTML content
  @Input() classToApply: string; //class to apply for highlighting
  @Input() setTitle = false; //sets title attribute of HTML

  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
