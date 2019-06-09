import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { TeamService } from '../team.service';
import { Team } from '../team';
import { League } from '../league';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  displayedColumns: string[] = [
    'homeTeam',
    'awayTeam',
    'week',
  ];

  get dataSource(): Game[] {
    return this.teams.find(t => t.FullName === this.selectedTeam).Schedule;
  }

  teamFullNames: string[];
  selectedTeam: string;
  league: League;
  teams: Team[];
  ngOnInit() {
    this.teamFullNames = this.teamService.GetTeamFullNames();
    this.league = this.teamService.GetLeague();
    this.teams = this.league.Teams;
    this.selectedTeam = this.league.Team;
  }
}
