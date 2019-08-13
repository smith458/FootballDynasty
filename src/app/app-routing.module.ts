import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FinanceComponent } from './finance/finance.component';
import { LeagueComponent } from './league/league.component';
import { LeagueCreationComponent } from './league-creation/league-creation.component';

const routes: Routes = [
  { path: 'league-creation', component: LeagueCreationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamViewComponent },
  { path: 'schedule', component: ScheduleComponent},
  { path: 'finance', component: FinanceComponent},
  { path: 'league', component: LeagueComponent},
  { path: '', redirectTo: '/league-creation', pathMatch: 'full' },
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
