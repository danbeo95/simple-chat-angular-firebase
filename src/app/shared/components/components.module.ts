import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [ButtonLoadingComponent],
  imports: [
    CommonModule,
    MatModule
  ],
  exports: [
    ButtonLoadingComponent
  ]
})
export class ComponentsModule { }
