import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxTextAreaModule } from 'devextreme-angular';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';
import { Routes, RouterModule } from '@angular/router';
import { PlanCardComponent } from './plan-card/plan-card.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { TrsPageComponent } from './trs-page/trs-page.component';
import { ReactorsPageComponent } from './reactors-page/reactors-page.component';
import { MetersPageComponent } from './meters-page/meters-page.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleCardComponent },
  {
    path: 'plan', component: PlanCardComponent,
    children: [
      { path: '', component: SummaryPageComponent },
      { path: 'summary', component: SummaryPageComponent },
      { path: 'trs', component: TrsPageComponent },
      { path: 'reactors', component: ReactorsPageComponent },
      { path: 'meters', component: MetersPageComponent }]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxButtonModule,
    DxTextAreaModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
