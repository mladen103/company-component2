import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes : Routes = [
  {
    path : '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'  
      }
    ]
  },

  {
    path : 'about-us',
    redirectTo: 'about-us',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './about-us/about-us.module#AboutUsModule'  
      }
    ]
    //loadChildren: './about-us/about-us.module#AboutUsModule'
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
