import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveCvRoutingModule } from './leave-cv-routing.module';
import { LeaveCvComponent } from './components/leave-cv/leave-cv.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LeaveCvComponent],
  imports: [
    CommonModule,
    LeaveCvRoutingModule,
    ReactiveFormsModule
  ]
})
export class LeaveCvModule { }
