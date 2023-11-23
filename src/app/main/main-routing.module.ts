import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {LayoutComponent} from '../layout/default/layout.component'
import {DashboardDefaultComponent} from "./dashboard/dashboard-default/dashboard-default.component"
import {DashboardAnalyticsComponent} from "./dashboard/dashboard-analytics/dashboard-analytics.component"
import { ProductListComponent } from "./dashboard/product/product-list.component"
import { AuthGuard } from '../auth/auth.guard'


const routeForPages = [
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard'
    },
    children: [
      {
        path: 'default',
        component: DashboardDefaultComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Default'
        },
      },
      {
        path: 'analytics',
        component: DashboardAnalyticsComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Analytics'
        },
      },
      {
        path: 'product',
        component: ProductListComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/app/dashboard/default',
    pathMatch: 'full',
  },
]

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: routeForPages,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
