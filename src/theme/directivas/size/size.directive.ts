import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
export type Size = 'small' | 'medium' | 'large' ;
@Directive({
  selector: `[size] `,
})
export class SizeDirective implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input() size: Size = 'small';
  ngOnChanges() {
    this.el.nativeElement.classList.add(this.size);
  }
  ngAfterViewInit(): void {
    Array.prototype.slice.call(document.querySelectorAll('.mat-mdc-form-field-subscript-wrapper')).filter(f => f.children[0].children[0].innerHTML === "").map(matHint =>  matHint.classList.add('display_none'));
    
  }

}