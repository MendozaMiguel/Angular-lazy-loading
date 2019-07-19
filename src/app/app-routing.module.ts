import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './modules/general/notfound/notfound.component';
import { HomeComponent } from './modules/general/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', loadChildren: './modules/general/about/about.module#AboutModule'
  },
  {
    path: 'contact', loadChildren: './modules/general/contact/contact.module#ContactModule'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
