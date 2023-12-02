import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SharedModule} from "../shared/shared.module"
import {LayoutModule} from "../layout/layout.module"
import {AgGridModule} from '@ag-grid-community/angular'
import {ChartsModule} from '../../@youpez'
import {MainRoutingModule} from './main-routing.module'

import {DashboardDefaultComponent} from './dashboard/dashboard-default/dashboard-default.component'
import {DashboardAnalyticsComponent} from './dashboard/dashboard-analytics/dashboard-analytics.component'
import {ProductListComponent} from './dashboard/product/product-list.component'
import { FormProductComponent } from './dashboard/product/add-edit-product/form-product.component'

@NgModule({
  declarations: [
    DashboardDefaultComponent,
    DashboardAnalyticsComponent,
    ProductListComponent,
    FormProductComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    SharedModule,
    ChartsModule,
    AgGridModule.withComponents([]),
  ]
})
export class MainModule {
}
