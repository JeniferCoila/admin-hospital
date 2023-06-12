import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { HomeComponent } from './pages/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'progress', component: ProgressEvent },
      { path: 'graphic', component: GraphicComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
