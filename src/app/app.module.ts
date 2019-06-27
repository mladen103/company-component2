import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
  },

  {
    path : 'employees',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './employees/employees.module#EmployeesModule'  
      }
    ]
  },

  {
    path : 'about-author',
    redirectTo: 'about-author',
    pathMatch: 'full'
  },
  {
    path: 'about-author',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './about-author/about-author.module#AboutAuthorModule'
      }
    ]
  },

  {
    path : 'contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './contact/contact.module#ContactModule'  
      }
    ]
  },

  {
    path : 'leave-cv',
    redirectTo: 'leave-cv',
    pathMatch: 'full'
  },
  {
    path: 'leave-cv',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './leave-cv/leave-cv.module#LeaveCvModule'  
      }
    ]
  },

  
  
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
