import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './utils/resources/routes';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: ()=> import('./pages/pages.module').then(m=>m.PagesModule),
    // canActivate: [AuthGuard],
  },
  {
    path: AppRoutes.auth,
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
