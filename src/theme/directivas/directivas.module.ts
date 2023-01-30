import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarDirective } from './avatar/avatar.directive';
import { SizeDirective } from './size/size.directive';

const directivas = [AvatarDirective, SizeDirective];
@NgModule({
  declarations: [directivas],
  imports: [CommonModule],
  exports: [directivas],
})
export class DirectivasModule {}
