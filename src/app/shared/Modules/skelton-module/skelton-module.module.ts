import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeltonModuleComponent } from './skelton-module.component';
import { SkeletonDirective } from '../Directives/skelton.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SkeltonModuleComponent, SkeletonDirective],
  exports: [SkeltonModuleComponent, SkeletonDirective],
})
export class SkeltonModuleModule {}
