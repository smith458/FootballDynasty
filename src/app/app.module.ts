import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatTabsModule, MatSelectModule,
         MatFormFieldModule, MatSidenavModule, MatButtonModule,
         MatInputModule } from '@angular/material';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { LeagueComponent } from './league/league.component';
import { HomeComponent } from './home/home.component';
import { LeagueCreationComponent } from './league-creation/league-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamViewComponent,
    ScheduleComponent,
    FinanceComponent,
    LeagueComponent,
    HomeComponent,
    LeagueCreationComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
