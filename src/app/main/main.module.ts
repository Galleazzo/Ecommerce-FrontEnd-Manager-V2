import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SharedModule} from "../shared/shared.module"
import {LayoutModule} from "../layout/layout.module"
import {AgGridModule} from '@ag-grid-community/angular'
import {ChartsModule} from '../../@youpez'
import {MainRoutingModule} from './main-routing.module'

import {WidgetsGeneralComponent} from './widgets/widgets-general/widgets-general.component'
import {DashboardDefaultComponent} from './dashboard/dashboard-default/dashboard-default.component'
import {DashboardAnalyticsComponent} from './dashboard/dashboard-analytics/dashboard-analytics.component'
import {ProductListComponent} from './dashboard/product/product-list.component'
import {TasksComponent} from './tasks/tasks/tasks.component'
import {MailComponent} from './mail/mail/mail.component'
import {MessagesComponent} from './messages/messages/messages.component'
import {Error404Component} from './errors/error404/error404.component'
import {Error500Component} from './errors/error500/error500.component'
import {WidgetsCardComponent} from './widgets/widgets-card/widgets-card.component'
import {WidgetsListComponent} from './widgets/widgets-list/widgets-list.component'
import {IconsComponent} from './icons/icons.component'
import {DummyTableExpansionComponent} from './components/dummy-table-expansion/dummy-table-expansion.component'
import {DummyTableAdvancedComponent} from './components/dummy-table-advanced/dummy-table-advanced.component'
import {DummyTablePaginationComponent} from './components/dummy-table-pagination/dummy-table-pagination.component'
import {DummyTableRichComponent} from './components/dummy-table-rich/dummy-table-rich.component'
import {DummyFormCreditCardComponent} from './components/dummy-form-credit-card/dummy-form-credit-card.component'
import {DummyFormBillingComponent} from './components/dummy-form-billing/dummy-form-billing.component'
import {DummyFormWizardComponent} from './components/dummy-form-wizard/dummy-form-wizard.component'
import {MailComposeComponent} from './mail/mail-compose/mail-compose.component';

@NgModule({
  declarations: [
    WidgetsGeneralComponent,
    DashboardDefaultComponent,
    DashboardAnalyticsComponent,
    ProductListComponent,
    TasksComponent,
    MailComponent,
    MessagesComponent,
    Error404Component,
    Error500Component,
    WidgetsCardComponent,
    WidgetsListComponent,
    IconsComponent,
    DummyTableExpansionComponent,
    DummyTableAdvancedComponent,
    DummyTablePaginationComponent,
    DummyTableRichComponent,
    DummyFormCreditCardComponent,
    DummyFormBillingComponent,
    DummyFormWizardComponent,
    MailComposeComponent,
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
