import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TextfieldComponent } from "../utils/widgets/textfield/textfield.component";


@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
        OtpVerificationComponent,
        ChangePasswordComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        TextfieldComponent
    ]
})
export class AuthModule { }
