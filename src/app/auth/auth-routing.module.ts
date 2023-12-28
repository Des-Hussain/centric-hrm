import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../utils/resources/routes';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: AppRoutes.login,
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
