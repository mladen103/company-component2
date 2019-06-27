import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveCvComponent } from './components/leave-cv/leave-cv.component';

const routes: Routes = [
  {
    path: '',
    component: LeaveCvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveCvRoutingModule { }
