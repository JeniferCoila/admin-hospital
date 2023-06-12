import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { AppNavItemComponent } from './shared/sidebar/nav-item/nav-item.component';
import { BrandingComponent } from './shared/sidebar/branding.component';
import { HomeComponent } from './pages/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    GraphicComponent,
    AppNavItemComponent,
    BrandingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
