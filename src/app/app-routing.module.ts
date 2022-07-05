import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidenavComponent} from "./sidenav/sidenav.component";
import {HomeComponent} from "./home/home.component";
import {SideNavContentComponent} from "./side-nav-content/side-nav-content.component";

const routes: Routes = [
  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [
      {
        path: ':id',
      component: SideNavContentComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
