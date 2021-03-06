import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './task-available/dashboard.module';
import {TaskCreatorModule} from './task-creator/task-creator.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {TaskDetailModule} from './task-detail/task-detail.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
    TaskCreatorModule,
    TaskDetailModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
