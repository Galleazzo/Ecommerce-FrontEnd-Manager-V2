import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SharedModule} from "../shared/shared.module"

import {AuthRoutingModule} from './auth-routing.module'
import {AuthLoginComponent} from './auth-login/auth-login.component'

import { AuthInterceptor } from './auth.interceptor'
import {AuthGuard} from './auth.guard'

@NgModule({
  declarations: [
    AuthLoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
  providers: [
    AuthInterceptor,
    AuthGuard
  ],
})
export class AuthModule {
}
