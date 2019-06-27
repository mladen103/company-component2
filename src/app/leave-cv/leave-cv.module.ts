import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveCvRoutingModule } from './leave-cv-routing.module';
import { LeaveCvComponent } from './components/leave-cv/leave-cv.component';

@NgModule({
  declarations: [LeaveCvComponent],
  imports: [
    CommonModule,
    LeaveCvRoutingModule
  ]
})
export class LeaveCvModule { }
