import { Directive, ElementRef, Input } from '@angular/core';
import { Size } from '../size/size.directive';
export type avatarVariant = 'rounded' | 'square' | 'circular';

@Directive({
  selector: 'mat-avatar,avatar[variant]',
})
export class AvatarDirective {
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input()
  avatar: avatarVariant = 'circular';

  @Input()
  size: Size = 'small';

  ngOnInit(): void {
    this.el.nativeElement.classList.add(
      `matAvatar--${this.avatar}`,
      `${this.size}`
    );
  }
}
