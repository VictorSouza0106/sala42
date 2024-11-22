import { Routes } from '@angular/router';
import { PwdpageComponent } from './pages/pwdpage/pwdpage.component';
import { HomeComponent } from './pages/home/home.component';
import { Sala42Component } from './pages/sala42/sala42.component';
import { MemberPageComponent } from './pages/member-page/member-page.component';

export const routes: Routes = [
  {
    path: 'pwd',
    component: PwdpageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sala42',
    component: Sala42Component,
  },
  {
    path: 'member',
    component: MemberPageComponent,
  },
  {
    path: '**',
    redirectTo: 'pwd',
  },
];
