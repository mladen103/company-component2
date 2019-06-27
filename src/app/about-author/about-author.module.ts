import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutAuthorRoutingModule } from './about-author-routing.module';
import { AboutAuthorComponent } from './components/about-author/about-author.component';

@NgModule({
  declarations: [AboutAuthorComponent],
  imports: [
    CommonModule,
    AboutAuthorRoutingModule
  ]
})
export class AboutAuthorModule { }
