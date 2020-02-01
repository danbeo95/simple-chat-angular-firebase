import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './mat/mat.module';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
