import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxTextAreaModule } from 'devextreme-angular';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : 'schedule', component : ScheduleCardComponent}
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
