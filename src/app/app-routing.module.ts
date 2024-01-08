import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './utils/resources/routes';
import { AuthGuard } from './guards/auth-guard.service';

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
