import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { authRoutes } from './lib.routes';
import { AuthDashboardComponent } from './auth-dashboard/auth-dashboard.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes), RouterModule],
  declarations: [
    AuthDashboardComponent,
    AuthLoginComponent,
    AuthSignupComponent,
  ],
})
export class AuthModule {}
