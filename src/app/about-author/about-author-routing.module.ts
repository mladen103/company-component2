import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAuthorComponent } from './components/about-author/about-author.component';

const routes: Routes = [
  {
    path: '',
    component: AboutAuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutAuthorRoutingModule { }
