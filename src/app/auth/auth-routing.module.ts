import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthLoginComponent } from "./auth-login/auth-login.component"

import {
  AppLayoutDividedComponent,
  AppLayoutDividedAltComponent,
  AppLayoutDividedFullComponent,
  AppLayoutBasicComponent
} from "@youpez/index"


const routes: Routes = [
  {
    path: '',
    component: AppLayoutBasicComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginComponent,
      },
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
