import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamViewComponent } from './team-view/team-view.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FinanceComponent } from './finance/finance.component';
import { LeagueComponent } from './league/league.component';

const routes: Routes = [
  { path: 'team', component: TeamViewComponent },
  { path: 'schedule', component: ScheduleComponent},
  { path: 'finance', component: FinanceComponent},
  { path: 'league', component: LeagueComponent},
  { path: '', redirectTo: '/team', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
